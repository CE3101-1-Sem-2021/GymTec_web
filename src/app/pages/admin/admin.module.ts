import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";

import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManagementComponent } from "./management/management.component";
import { SitesComponent } from "./sites/sites.component";
import { TreatmentsComponent } from "./treatments/treatments.component";
import { PositionsComponent } from "./positions/positions.component";
import { PayrollsComponent } from "./payrolls/payrolls.component";
import { EmployeesComponent } from "./employees/employees.component";
import { ServicesComponent } from "./services/services.component";
import { EquipmentComponent } from "./equipment/equipment.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { ProductsComponent } from "./products/products.component";
import { PayrollTypesComponent } from "./payroll-types/payroll-types.component";
import { MenuOptionComponent } from "./menu-option/menu-option.component";
import { TreatmentComponent } from "./treatments/treatment/treatment.component";
import { NewTreatmentComponent } from "./treatments/new-treatment/new-treatment.component";
import { TreatmentDetailsComponent } from './treatments/treatment-details/treatment-details.component';

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
    PayrollTypesComponent,
    MenuOptionComponent,
    TreatmentComponent,
    NewTreatmentComponent,
    TreatmentDetailsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
