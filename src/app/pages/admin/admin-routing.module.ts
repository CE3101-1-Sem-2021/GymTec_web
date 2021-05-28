import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { SitesComponent } from './sites/sites.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { PositionsComponent } from './positions/positions.component';
import { PayrollsComponent } from './payrolls/payrolls.component';
import { EmployeesComponent } from './employees/employees.component';
import { ServicesComponent } from './services/services.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';
import { PayrollTypesComponent } from './payroll-types/payroll-types.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'equipment',
        component: EquipmentComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'management',
        component: ManagementComponent
      },
      {
        path: 'payroll-types',
        component: PayrollTypesComponent
      },
      {
        path: 'payrolls',
        component: PayrollsComponent
      },
      {
        path: 'positions',
        component: PositionsComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'sites',
        component: SitesComponent
      },
      {
        path: 'treatments',
        component: TreatmentsComponent
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
export class AdminRoutingModule { }
