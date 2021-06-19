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
    this.editableEmployeeData.Cedula = this.employeeData.Cedula;
    this.editableEmployeeData.Canton = this.employeeData.Canton;
    this.editableEmployeeData.Distrito = this.employeeData.Distrito;
    this.editableEmployeeData.Email = this.employeeData.Email;
    this.editableEmployeeData.imageURL = this.employeeData.imageURL;
    this.editableEmployeeData.Apellidos = this.employeeData.Apellidos;
    this.editableEmployeeData.Nombre = this.employeeData.Nombre;
    this.editableEmployeeData.Contraseña = this.employeeData.Contraseña;
    this.editableEmployeeData.Planilla = this.employeeData.Planilla;
    this.editableEmployeeData.Puesto = this.employeeData.Puesto;
    this.editableEmployeeData.Provincia = this.employeeData.Provincia;
    this.editableEmployeeData.Salario = this.employeeData.Salario;
    this.editableEmployeeData.Sucursal = this.employeeData.Sucursal;
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
