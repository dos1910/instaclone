import { Component, Input, OnInit } from '@angular/core';
import { BLANK_IMAGE } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.scss'],
})
export class CommentsModalComponent implements OnInit {
  @Input() post: any;
  @Input() picture;

  constructor() { }
  // ============================================================
  // UTILITIES
  // ============================================================

  // ============================================================
  // VIEW METHODS
  // ============================================================
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

  // ============================================================
  // ANGULAR LIFECYCLES
  // ============================================================

  ngOnInit() {
  }

}
