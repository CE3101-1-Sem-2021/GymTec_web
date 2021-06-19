import { Injectable } from "@angular/core";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor() {}

  async getEmployees(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Employee/getAllEmployees/" +
        token,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async postEmployee(
    token: string,
    nombre: string,
    apellidos: string,
    cedula: string,
    provincia: string,
    canton: string,
    distrito: string,
    puesto: string,
    salario: number,
    email: string,
    contraseña: string,
    planilla: string,
    sucursal: string
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Employee/registerRequest/" +
        token,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          Cedula: cedula,
          Distrito: distrito,
          Puesto: puesto,
          Canton: canton,
          Provincia: provincia,
          Nombre: nombre,
          Apellidos: apellidos,
          Salario: salario,
          Email: email,
          Contraseña: contraseña,
          Planilla: planilla,
          Sucursal: sucursal,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async updateEmployee(
    token: string,
    nombre: string,
    apellidos: string,
    cedula: string,
    provincia: string,
    canton: string,
    distrito: string,
    puesto: string,
    salario: number,
    email: string,
    contraseña: string,
    planilla: string,
    sucursal: string
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Employee/updateEmployee/" +
        cedula +
        "/" +
        token,
      {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          Cedula: cedula,
          Distrito: distrito,
          Puesto: puesto,
          Canton: canton,
          Provincia: provincia,
          Nombre: nombre,
          Apellidos: apellidos,
          Salario: salario,
          Email: email,
          Contraseña: contraseña,
          Planilla: planilla,
          Sucursal: sucursal,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async deleteEmployee(token: string, cedula: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Employee/deleteEmployee/" +
        cedula +
        "/" +
        token,
      {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }
}
