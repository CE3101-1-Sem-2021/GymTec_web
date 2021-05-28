import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    PagesComponent,
    AdminComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }