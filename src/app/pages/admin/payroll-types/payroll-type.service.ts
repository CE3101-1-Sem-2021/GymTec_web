import { Injectable } from "@angular/core";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class PayrollTypeService {
  constructor() {}

  async getPayrollTypes(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Payroll/getAllPayrolls/" +
        token,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async postPayrollTypes(token: string, nombre: string, descripcion: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Payroll/createPayroll/" +
        token,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          Nombre: nombre,
          Descripcion: descripcion,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async updatePayrollTypes(
    token: string,
    nombreActual: string,
    nombre: string,
    descripcion: string
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Payroll/updatePayroll/" +
        nombreActual +
        "/" +
        token,
      {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          Nombre: nombre,
          Descripcion: descripcion,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async deletePayrollTypes(token: string, nombre: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Payroll/deletePayroll/" +
        nombre +
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
