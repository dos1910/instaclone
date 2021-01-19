import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import * as _ from 'lodash';

import { RandomService } from 'src/app/shared/services/random.service';
import { BLANK_IMAGE } from 'src/app/shared/utils/constants';
import { environment } from 'src/environments/environment';

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
  constructor(private randomService: RandomService) { }
  // ============================================================
  // UTILITIES
  // ============================================================
  // ============================================================
  // VIEW METHODS
  // ============================================================

  async load(options: any) {
    const post: any = await this.randomService.getList(options).toPromise();
    const results = post.results;
    console.log(this.userPosts.length);
    if (this.userPosts.length > 0 ){
      this.userPosts = _.concat (this.userPosts, results);
    }else{
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

  // ============================================================
  // ANGULAR LIFECYCLES
  // ============================================================

  async ngOnInit() {
    await this.load({ results: this.result, page: this.currentPage, seed: 'abc' });
  }

}
