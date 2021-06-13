import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "src/app/models/employee";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.scss"],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor() {}
  @Input() employeeData!: Employee;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editableEmployeeData = new Employee();

  ngOnInit(): void {
    this.editableEmployeeData.ID = this.employeeData.ID;
    this.editableEmployeeData.canton = this.employeeData.canton;
    this.editableEmployeeData.district = this.employeeData.district;
    this.editableEmployeeData.email = this.employeeData.email;
    this.editableEmployeeData.imageURL = this.employeeData.imageURL;
    this.editableEmployeeData.lastNames = this.employeeData.lastNames;
    this.editableEmployeeData.name = this.employeeData.name;
    this.editableEmployeeData.password = this.employeeData.password;
    this.editableEmployeeData.payrollType = this.employeeData.payrollType;
    this.editableEmployeeData.position = this.employeeData.position;
    this.editableEmployeeData.province = this.employeeData.province;
    this.editableEmployeeData.salary = this.employeeData.salary;
    this.editableEmployeeData.site = this.employeeData.site;
  }

  saveChanges() {
    this.edit = false;
    this.employeeData = this.editableEmployeeData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.employeeData,
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
      attached: this.employeeData,
    });
  }
}
