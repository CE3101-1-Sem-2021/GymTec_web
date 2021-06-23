import { Injectable } from "@angular/core";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class AdminService {
  token = "";
  email = "";
  constructor() {}

  validateCredentials(
    usernameFld: string,
    passwordFld: string,
    puesto: string
  ) {
    this.email = usernameFld;
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Employee/loginRequest",
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          Email: usernameFld, //'dcamachog99@gmail.com',
          Contraseña: passwordFld,
          Puesto: "Administrador",
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  generatePayroll() {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Payroll/generatePayments/" +
        this.token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }
}
