import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const SHARED = [];

@NgModule({
  declarations: [...SHARED],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
