import { Injectable } from "@angular/core";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class InventoryService {
  constructor() {}

  async getMachines(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Maquina/getAllMachines/" +
        token,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async postMachine(
    token: string,
    marca: string,
    tipoEquipo: string,
    costo: number,
    serial: string,
    sucursal: string
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Maquina/addMachine/" + token,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          Serial: serial,
          Tipo_Equipo: tipoEquipo,
          Marca: marca,
          Costo: costo,
          Sucursal: sucursal,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async updateMachine(
    token: string,
    serialAnterior: string,
    marca: string,
    tipoEquipo: string,
    costo: number,
    serial: string,
    sucursal: string
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Maquina/updateMachine/" +
        serialAnterior +
        "/" +
        token,
      {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          Serial: serial,
          Tipo_Equipo: tipoEquipo,
          Marca: marca,
          Costo: costo,
          Sucursal: sucursal,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async deleteMachine(token: string, serial: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Job/deleteJob/" +
        serial +
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
