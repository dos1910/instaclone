import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePage } from './home/home.page';
import { ComponentsModule } from '../components/components.module';

const PAGES = [HomePage];

@NgModule({
  declarations: [...PAGES],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
