import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-post-list',
  templateUrl: './profile-post-list.component.html',
  styleUrls: ['./profile-post-list.component.scss'],
})
export class ProfilePostListComponent implements OnInit {

  post: any = [];
  constructor() { }
  // ============================================================
  // UTILITIES
  // ============================================================

  // ============================================================
  // VIEW METHODS
  // ============================================================

  // ============================================================
  // ANGULAR LIFECYCLES
  // ============================================================

  ngOnInit() {}

}
