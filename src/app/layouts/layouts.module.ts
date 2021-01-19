import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutPage } from './main-layout/main-layout.page';

const LAYOUTS = [MainLayoutPage];

@NgModule({
  declarations: [...LAYOUTS],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutsModule { }
