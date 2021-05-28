import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

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


@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    SitesComponent,
    TreatmentsComponent,
    PositionsComponent,
    PayrollsComponent,
    EmployeesComponent,
    ServicesComponent,
    EquipmentComponent,
    InventoryComponent,
    ProductsComponent,
    PayrollTypesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

