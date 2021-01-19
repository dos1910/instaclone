import { Component, OnInit, ViewChild } from '@angular/core';
import { PostListComponent } from 'src/app/components/post-list/post-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('postList', { static: false })
  postList: PostListComponent;
  constructor() { }
  // ============================================================
  // UTILITIES
  // ============================================================

  // ============================================================
  // VIEW METHODS
  // ============================================================

  doRefresh(event) {
    this.postList.doRefresh(event);
  }

  // ============================================================
  // ANGULAR LIFECYCLES
  // ============================================================

  ngOnInit() {
  }

}
