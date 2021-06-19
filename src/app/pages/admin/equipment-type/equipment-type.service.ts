import { Injectable } from "@angular/core";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class EquipmentTypeService {
  constructor() {}

  async getEquipmentTypes(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/TipoEquipo/getAllMachineTypes/" +
        token,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async postEquipmentType(token: string, nombre: string, descripcion: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/TipoEquipo/addMachineType/" +
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

  async updateEquipmentType(
    token: string,
    nombreActual: string,
    nombre: string,
    descripcion: string
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/TipoEquipo/updateMachineType/" +
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

  async deleteEquipmentType(token: string, nombre: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/TipoEquipo/deleteMachineType/" +
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
