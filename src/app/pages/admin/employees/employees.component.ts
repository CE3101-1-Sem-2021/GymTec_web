import { Component, OnInit, EventEmitter } from "@angular/core";
import { Employee } from "src/app/models/employee";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"],
})
export class EmployeesComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewEmployee = false;
  boolEmployeeDetails = false;
  currentEmployee: Employee = new Employee();

  employeeOptions = [
    {
      ID: "1234",
      name: "Fabián",
      lastNames: "Crawford Barquero",
      province: "Cartago",
      canton: "Oriental",
      district: "Oriental",
      position: {
        name: "Jefe",
        description: "Ci",
        imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      },
      site: "Guácimo",
      payrollType: "Quincenal",
      salary: 99999,
      email: "fabian152195@gmail.com",
      password: "1234",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewEmployee = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewEmployee = false;
        this.boolEmployeeDetails = false;
        break;
      }

      case "saveChanges": {
        const index = this.employeeOptions.indexOf(this.currentEmployee);
        this.employeeOptions[index] = $event.attached;
        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewEmployee = false;
        this.boolEmployeeDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolEmployeeDetails = true;
        this.currentEmployee = $event.attached;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
