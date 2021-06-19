import { Injectable } from "@angular/core";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class TreamentService {
  constructor() {}

  async getTreatment(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Treatment/getAllTreatments/" +
        token,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async postTreatment(token: string, nombre: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Treatment/createTreatment/" +
        token,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          Nombre: nombre,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async updateTreatment(token: string, nombre: string, id: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud//api/Treatment/updateTreatment/" +
        token,
      {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          Nombre: nombre,
          Id: id,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async deleteTreatment(token: string, id: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Treatment/deleteTreatment/" +
        id +
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
