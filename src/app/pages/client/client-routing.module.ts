import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { AvailableClassesComponent } from './available-classes/available-classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyClassesComponent } from './my-classes/my-classes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: 'available-classes',
        component: AvailableClassesComponent
      },
      {
        path: 'my-classes',
        component: MyClassesComponent
      },
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
