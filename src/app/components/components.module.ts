import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PostListComponent } from './post-list/post-list.component';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';

const COMPONENTS = [PostListComponent, CommentsModalComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
    CommonModule
  ]
})
export class ComponentsModule { }
