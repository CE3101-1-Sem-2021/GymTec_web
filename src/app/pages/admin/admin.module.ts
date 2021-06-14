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
import { EquipmentComponent } from "./inventory/equipment/equipment.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { ProductsComponent } from "./products/products.component";
import { PayrollTypesComponent } from "./payroll-types/payroll-types.component";
import { MenuOptionComponent } from "./menu-option/menu-option.component";
import { TreatmentComponent } from "./treatments/treatment/treatment.component";
import { NewTreatmentComponent } from "./treatments/new-treatment/new-treatment.component";
import { TreatmentDetailsComponent } from "./treatments/treatment-details/treatment-details.component";
import { EquipmentDetailsComponent } from "./inventory/equipment-details/equipment-details.component";
import { NewEquipmentComponent } from "./inventory/new-equipment/new-equipment.component";
import { EquipmentTypeComponent } from "./equipment-type/equipment-type.component";
import { EquipmentTypeInstanceComponent } from './equipment-type/equipment-type-instance/equipment-type-instance.component';
import { NewEquipmentTypeComponent } from './equipment-type/new-equipment-type/new-equipment-type.component';
import { EquipmentTypeDetailsComponent } from './equipment-type/equipment-type-details/equipment-type-details.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { PayrollTypeComponent } from './payroll-types/payroll-type/payroll-type.component';
import { PayrollTypeDetailsComponent } from './payroll-types/payroll-type-details/payroll-type-details.component';
import { NewPayrollTypeComponent } from './payroll-types/new-payroll-type/new-payroll-type.component';
import { PositionComponent } from './positions/position/position.component';
import { PositionDetailsComponent } from './positions/position-details/position-details.component';
import { NewPositionComponent } from './positions/new-position/new-position.component';
import { SiteComponent } from './sites/site/site.component';
import { SiteDetailsComponent } from './sites/site-details/site-details.component';
import { NewSiteComponent } from './sites/new-site/new-site.component';
import { ServiceComponent } from './services/service/service.component';
import { ServiceDetailsComponent } from './services/service-details/service-details.component';
import { NewServiceComponent } from './services/new-service/new-service.component';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NewProductComponent } from './products/new-product/new-product.component';

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
    EquipmentDetailsComponent,
    NewEquipmentComponent,
    EquipmentTypeComponent,
    EquipmentTypeInstanceComponent,
    NewEquipmentTypeComponent,
    EquipmentTypeDetailsComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    NewEmployeeComponent,
    PayrollTypeComponent,
    PayrollTypeDetailsComponent,
    NewPayrollTypeComponent,
    PositionComponent,
    PositionDetailsComponent,
    NewPositionComponent,
    SiteComponent,
    SiteDetailsComponent,
    NewSiteComponent,
    ServiceComponent,
    ServiceDetailsComponent,
    NewServiceComponent,
    ProductComponent,
    ProductDetailsComponent,
    NewProductComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
