import { Injectable } from "@angular/core";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  constructor() {}

  async getServices(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Service/getAllServices/" +
        token,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async postService(token: string, nombre: string, descripcion: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Service/createService/" +
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

  async updateService(
    token: string,
    nombreActual: string,
    nombre: string,
    descripcion: string
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Sevice/updateService/" +
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

  async deleteService(token: string, nombre: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Service/deleteService/" +
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
