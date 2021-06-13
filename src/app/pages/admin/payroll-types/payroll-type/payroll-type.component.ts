import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { PayrollType } from "src/app/models/payroll-type";

@Component({
  selector: "app-payroll-type",
  templateUrl: "./payroll-type.component.html",
  styleUrls: ["./payroll-type.component.scss"],
})
export class PayrollTypeComponent implements OnInit {
  @Input() payrollTypeData!: PayrollType;
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor() {}

  onClick() {
    this.raiseEvent.emit({
      eventID: "showDetails",
      attached: this.payrollTypeData,
    });
  }

  ngOnInit(): void {}
}
