import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController, PopoverController } from '@ionic/angular';
import * as _ from 'lodash';

import { RandomService } from 'src/app/shared/services/random.service';
import { BLANK_IMAGE } from 'src/app/shared/utils/constants';
import { environment } from 'src/environments/environment';
import { CommentsModalComponent } from '../comments-modal/comments-modal.component';
import { SocialPopoverComponent } from '../social-popover/social-popover.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  @ViewChild('myinfinite', { static: true })
  infiniteScroll: IonInfiniteScroll;

  result = 10;
  totalPages = 2;
  userPosts: any = [];
  currentPage = 1;
  constructor(
    private randomService: RandomService,
    public popoverController: PopoverController,
    public modalController: ModalController
  ) { }
  // ============================================================
  // UTILITIES
  // ============================================================
  // ============================================================
  // VIEW METHODS
  // ============================================================

  async load(options: any) {
    const post: any = await this.randomService.getList(options).toPromise();
    const results = post.results;

    if (this.userPosts.length > 0) {
      this.userPosts = _.concat(this.userPosts, results);
    } else {
      this.userPosts = results;
    }

    if (!this.hasNextPage(this.totalPages)) {
      this.infiniteScroll.disabled = true;
    }
  }

  async loadData(event) {
    this.currentPage += 1;
    await this.load({
      results: this.result, page: this.currentPage, seed: 'abc'
    });
    setTimeout(() => {
      event.target.complete();
    }, 1000);

  }

  hasNextPage(totalPage) {
    let nextPage = false;
    if (this.currentPage < totalPage) {
      nextPage = true;
    }
    return nextPage;
  }


  doRefresh(event) {
    this.currentPage = 1;
    this.userPosts = [];
    this.load({
      results: this.result, page: this.currentPage, seed: 'abc'
    });

    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  getPic(i) {
    const id = i + 100;
    const root = `${environment.randomPic}/id/${id}/1000/1000`;
    return root;
  }

  handleImgError(ev: any) {
    const source = ev.srcElement;
    const imgSrc = BLANK_IMAGE;
    source.src = imgSrc;
  }

  comment(post, comments) {
    if (!post.commentList) {
      post.commentList = [];
    }
    const commentPayload = {
      user: 'Stevenson II Orcino',
      comment: comments

    };
    post.commentList.push(commentPayload);
    post.comment = undefined;

  }

  like(userPost) {
    if (!userPost.like) {
      userPost.like = true;
    } else {
      userPost.like = undefined;
    }

  }

  async socialPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SocialPopoverComponent,
      event: ev,
      translucent: true
    });

    return await popover.present();
  }

  async commentModal(userPost, index) {
    const pic = await this.getPic(index);
    const modal = await this.modalController.create({
      component: CommentsModalComponent,
      componentProps: {
        post: userPost,
        picture: pic,
      }
    });
    return await modal.present();
  }



  // ============================================================
  // ANGULAR LIFECYCLES
  // ============================================================

  async ngOnInit() {
    await this.load({ results: this.result, page: this.currentPage, seed: 'abc' });
  }

}
