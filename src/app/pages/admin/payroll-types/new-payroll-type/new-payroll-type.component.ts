import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { PayrollType } from "src/app/models/payroll-type";

@Component({
  selector: "app-new-payroll-type",
  templateUrl: "./new-payroll-type.component.html",
  styleUrls: ["./new-payroll-type.component.scss"],
})
export class NewPayrollTypeComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  newPayrollType = new PayrollType();
  constructor() {}

  ngOnInit(): void {}
  saveChanges() {
    this.raiseEvent.emit({
      eventID: "addProduct",
      attached: this.newPayrollType,
    });
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }
}
