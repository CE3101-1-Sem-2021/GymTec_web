import { Injectable } from "@angular/core";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class PositionsServiceService {
  constructor() {}

  async getPuestos(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Job/getAllJobs/" + token,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async postPuesto(token: string, nombre: string, descripcion: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Job/createJob/" + token,
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

  async updatePuesto(
    token: string,
    nombreActual: string,
    nombre: string,
    descripcion: string
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Job/updateJob/" +
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

  async deletePuesto(token: string, nombre: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Job/deleteJob/" +
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
