import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AvailableClassesComponent } from './available-classes/available-classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassComponent } from './class/class.component';
import { ClassDetailsComponent } from './class-details/class-details.component';



@NgModule({
  declarations: [
    AvailableClassesComponent,
    DashboardComponent,
    ClassComponent,
    ClassDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
