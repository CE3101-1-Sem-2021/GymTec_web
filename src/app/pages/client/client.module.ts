import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';

import { AvailableClassesComponent } from './available-classes/available-classes.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [
    AvailableClassesComponent,
    MyClassesComponent,
    DashboardComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
