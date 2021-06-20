import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { PayrollType } from "src/app/models/payroll-type";
import { AdminService } from "src/app/services/admin.service";
import { AlertService } from "src/app/services/alert.service";
import { PayrollTypeService } from "./payroll-type.service";

@Component({
  selector: "app-payroll-types",
  templateUrl: "./payroll-types.component.html",
  styleUrls: ["./payroll-types.component.scss"],
})
export class PayrollTypesComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewPayrollType = false;
  boolPayrollTypeDetails = false;
  currentPayrollType: PayrollType = new PayrollType();
  currentPayrollType2: PayrollType = new PayrollType();
  payrollTypeOptions = [
    {
      Nombre: "Quincenal",
      Descripcion: "Ci",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewPayrollType = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewPayrollType = false;
        this.boolPayrollTypeDetails = false;
        this.currentPayrollType2 = $event.attached;
        this.payrollTypeService
          .postPayrollTypes(
            this.adminService.token,
            this.currentPayrollType2.Nombre,
            this.currentPayrollType2.Descripcion
          )
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw response.text();
            }
            return response.text();
          })
          .then((result) => {
            console.log(result);
            this.alertService.alertSuccess(result);
            this.payrollTypeService
              .getPayrollTypes(this.adminService.token)
              .then((response) => {
                //console.log(response.text());
                if (!response.ok) {
                  throw new Error(response.toString());
                }
                return response.text();
              })
              .then((result) => {
                this.payrollTypeOptions = JSON.parse(result) as [PayrollType];
                console.log(result);
              })
              .catch(async (err) => {
                err.then((result: any) => {
                  console.log(result);
                  this.alertService.alertError(result);
                });
              });
          })
          .catch(async (err) => {
            err.then((result: any) => {
              console.log(result);
              this.alertService.alertError(result);
            });
          });

        break;
      }

      case "saveChanges": {
        const index = this.payrollTypeOptions.indexOf(this.currentPayrollType);
        this.payrollTypeOptions[index] = $event.attached;
        this.currentPayrollType2 = $event.attached;
        this.payrollTypeService
          .updatePayrollTypes(
            this.adminService.token,
            this.currentPayrollType.Nombre,
            this.currentPayrollType2.Nombre,
            this.currentPayrollType2.Descripcion
          )
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw response.text();
            }
            return response.text();
          })
          .then((result) => {
            console.log(result);
            this.alertService.alertSuccess(result);
          })
          .catch(async (err) => {
            err.then((result: any) => {
              console.log(result);
              this.alertService.alertError(result);
            });
          });

        break;
      }

      case "deleteProduct": {
        this.boolSmokeScreen = true;
        this.boolPayrollTypeDetails = true;
        this.currentPayrollType2 = $event.attached;
        this.payrollTypeService
          .deletePayrollTypes(
            this.adminService.token,
            this.currentPayrollType2.Nombre
          )
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw response.text();
            }
            return response.text();
          })
          .then((result) => {
            console.log(result);
            this.alertService.alertSuccess(result);
            this.payrollTypeService
              .getPayrollTypes(this.adminService.token)
              .then((response) => {
                //console.log(response.text());
                if (!response.ok) {
                  throw new Error(response.toString());
                }
                return response.text();
              })
              .then((result) => {
                this.payrollTypeOptions = JSON.parse(result) as [PayrollType];
                console.log(result);
              })
              .catch(async (err) => {
                err.then((result: any) => {
                  console.log(result);
                  this.alertService.alertError(result);
                });
              });
          })
          .catch(async (err) => {
            err.then((result: any) => {
              console.log(result);
              this.alertService.alertError(result);
            });
          });

        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewPayrollType = false;
        this.boolPayrollTypeDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolPayrollTypeDetails = true;
        this.currentPayrollType = $event.attached;
      }
    }
  }

  constructor(
    public payrollTypeService: PayrollTypeService,
    public adminService: AdminService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.payrollTypeService
      .getPayrollTypes(this.adminService.token)
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.payrollTypeOptions = JSON.parse(result) as [PayrollType];
        console.log(result);
      })
      .catch(async (err) => {
        err.then((result: any) => {
          console.log(result);
          this.alertService.alertError(result);
        });
      });
  }
}
