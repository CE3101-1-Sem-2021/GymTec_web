import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "src/app/models/employee";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent implements OnInit {
  @Input() employeeData!: Employee;
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor() {}

  onClick() {
    this.raiseEvent.emit({
      eventID: "showDetails",
      attached: this.employeeData,
    });
  }
  ngOnInit(): void {}
}
