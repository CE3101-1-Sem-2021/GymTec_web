import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { PayrollType } from "src/app/models/payroll-type";

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

  payrollTypeOptions = [
    {
      name: "Quincenal",
      description: "Ci",
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
        break;
      }

      case "saveChanges": {
        const index = this.payrollTypeOptions.indexOf(this.currentPayrollType);
        this.payrollTypeOptions[index] = $event.attached;
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

  constructor() {}

  ngOnInit(): void {}
}
