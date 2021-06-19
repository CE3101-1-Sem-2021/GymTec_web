import { Component, OnInit, EventEmitter } from "@angular/core";
import { Employee } from "src/app/models/employee";
import { EventData } from "src/app/models/event-data";
import { AdminService } from "src/app/services/admin.service";
import { AlertService } from "src/app/services/alert.service";
import { EmployeeService } from "./employee.service";

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
  currentEmployee2: Employee = new Employee();
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
        this.currentEmployee2 = $event.attached;
        this.employeeService
          .postEmployee(
            this.adminService.token,
            this.currentEmployee2.Nombre,
            this.currentEmployee2.Apellidos,
            this.currentEmployee2.Cedula,
            this.currentEmployee2.Provincia,
            this.currentEmployee2.Canton,
            this.currentEmployee2.Distrito,
            this.currentEmployee2.Puesto,
            this.currentEmployee2.Salario,
            this.currentEmployee2.Email,
            this.currentEmployee2.Contraseña,
            this.currentEmployee2.Planilla,
            this.currentEmployee2.Sucursal
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
            console.log(err);
          });

        break;
      }

      case "saveChanges": {
        const index = this.employeeOptions.indexOf(this.currentEmployee);
        this.employeeOptions[index] = $event.attached;
        this.currentEmployee2 = $event.attached;
        this.employeeService
          .updateEmployee(
            this.adminService.token,
            this.currentEmployee2.Nombre,
            this.currentEmployee2.Apellidos,
            this.currentEmployee.Cedula,
            this.currentEmployee2.Cedula,
            this.currentEmployee2.Provincia,
            this.currentEmployee2.Canton,
            this.currentEmployee2.Distrito,
            this.currentEmployee2.Puesto,
            this.currentEmployee2.Salario,
            this.currentEmployee2.Email,
            this.currentEmployee2.Contraseña,
            this.currentEmployee2.Planilla,
            this.currentEmployee2.Sucursal
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
            console.log(err);
          });

        break;
      }

      case "deleteProduct": {
        this.boolSmokeScreen = true;
        this.boolEmployeeDetails = true;
        this.currentEmployee2 = $event.attached;
        this.employeeService
          .deleteEmployee(this.adminService.token, this.currentEmployee2.Cedula)
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
            console.log(err);
            this.alertService.alertError(err);
          });

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

  constructor(
    public employeeService: EmployeeService,
    public adminService: AdminService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.employeeService
      .getEmployees(this.adminService.token)
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.employeeOptions = JSON.parse(result) as [Employee];
        console.log(result);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }
}
