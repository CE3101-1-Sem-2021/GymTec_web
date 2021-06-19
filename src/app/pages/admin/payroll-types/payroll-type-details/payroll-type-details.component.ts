import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { PayrollType } from "src/app/models/payroll-type";

@Component({
  selector: "app-payroll-type-details",
  templateUrl: "./payroll-type-details.component.html",
  styleUrls: ["./payroll-type-details.component.scss"],
})
export class PayrollTypeDetailsComponent implements OnInit {
  constructor() {}

  @Input() payrollTypeData!: PayrollType;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editablePayrollTypeData = new PayrollType();

  ngOnInit(): void {
    this.editablePayrollTypeData.Nombre = this.payrollTypeData.Nombre;
    this.editablePayrollTypeData.imageURL = this.payrollTypeData.imageURL;
    this.editablePayrollTypeData.Descripcion = this.payrollTypeData.Descripcion;
  }

  saveChanges() {
    this.edit = false;
    this.payrollTypeData = this.editablePayrollTypeData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.payrollTypeData,
    });
  }

  editProduct() {
    this.edit = true;
  }

  cancel() {
    this.edit = false;
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }

  delete() {
    this.raiseEvent.emit({
      eventID: "deleteProduct",
      attached: this.payrollTypeData,
    });
  }
}
