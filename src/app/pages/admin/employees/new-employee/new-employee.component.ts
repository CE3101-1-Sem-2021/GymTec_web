import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Employee } from "src/app/models/employee";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-new-employee",
  templateUrl: "./new-employee.component.html",
  styleUrls: ["./new-employee.component.scss"],
})
export class NewEmployeeComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  newEmployee = new Employee();
  constructor() {}

  ngOnInit(): void {}
  saveChanges() {
    this.newEmployee.Contraseña = this.newEmployee.Contrasena;
    this.raiseEvent.emit({
      eventID: "addProduct",
      attached: this.newEmployee,
    });
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }
}
