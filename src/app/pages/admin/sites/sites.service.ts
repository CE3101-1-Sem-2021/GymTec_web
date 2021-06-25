import { Injectable } from "@angular/core";
import { SitePhoneNumber } from "src/app/models/site-phoneNumber";
import { SiteSchedule } from "src/app/models/site-schedule";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class SitesService {
  constructor() {}

  async getSites(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Gym/getAllGyms/",
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async changeSpaState(token: string, nombre: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Gym/activateSpa/1/" +
        nombre +
        "/" +
        token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async changeStoreState(token: string, nombre: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud//api/Gym/activateStore/1/" +
        nombre +
        "/" +
        token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async postSite(
    token: string,
    nombre: string,
    provincia: string,
    canton: string,
    distrito: string,
    fechaApertura: string,
    capacidadMax: number,
    horarios: SiteSchedule[],
    telefonos: SitePhoneNumber[],
    spaAct: boolean,
    storeAct: boolean
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Gym/createGym/" + token,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          Nombre: nombre,
          Distrito: distrito,
          Canton: canton,
          Provincia: provincia,
          Fecha_Apertura: fechaApertura,
          Capacidad_Max: capacidadMax,
          Horarios: horarios,
          Telefonos: telefonos,
          Tienda_Act: storeAct,
          Spa_Act: spaAct,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async updateSite(
    token: string,
    nombreActual: string,
    nombre: string,
    provincia: string,
    canton: string,
    distrito: string,
    fechaApertura: string,
    capacidadMax: number,
    horarios: SiteSchedule[],
    telefonos: SitePhoneNumber[],
    spaAct: boolean,
    storeAct: boolean
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Gym/updateGym/" +
        nombreActual +
        "/" +
        token,
      {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          Nombre: nombre,
          Distrito: distrito,
          Canton: canton,
          Provincia: provincia,
          Fecha_Apertura: fechaApertura,
          Capacidad_Max: capacidadMax,
          Horarios: horarios,
          Telefonos: telefonos,
          Tienda_Act: storeAct,
          Spa_Act: spaAct,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async deleteSite(token: string, nombre: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Gym/deleteGym/" +
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
