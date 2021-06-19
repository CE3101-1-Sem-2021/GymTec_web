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
      Cedula: "1234",
      Nombre: "Fabián",
      Apellidos: "Crawford Barquero",
      Provincia: "Cartago",
      Canton: "Oriental",
      Distrito: "Oriental",
      Puesto: "Jefe",
      Sucursal: "Guácimo",
      Planilla: "Quincenal",
      Salario: 99999,
      Email: "fabian152195@gmail.com",
      Contraseña: "1234",
      Contrasena: "1234",
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
