import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutPage } from '../layouts/main-layout/main-layout.page';
import { HomePage } from './home/home.page';

const routes: Routes =
  [
    {
      path: '',
      component: MainLayoutPage,
      children: [
          {
            path: 'home',
            component: HomePage,
          },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
