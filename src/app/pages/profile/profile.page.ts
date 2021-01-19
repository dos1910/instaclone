import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BLANK_IMAGE } from 'src/app/shared/utils/constants';
import { unsubscribeAll } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  subscriptions = [];
  profile: any = [];
  constructor(
    private route: ActivatedRoute,
  ) { }
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
  // ============================================================
  // ANGULAR LIFECYCLES
  // ============================================================

  ngOnInit() {
    this.subscriptions.push(this.route.params.subscribe(async params => {
    this.profile = params;



    }));
  }

  ngOnDestroy() {
    unsubscribeAll(this.subscriptions);
  }
}
