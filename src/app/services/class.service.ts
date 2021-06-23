import { Injectable } from '@angular/core';
import { Class } from '../models/calendar/class';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  allClasses: Class[] = [];

  constructor() { }

  async getClasses(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Class/getAllClasses/",
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

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

  createClass(token: string, newClass: Class) {
    let json = JSON.stringify({
      Hora_Inicio: newClass.Hora_Inicio,
      Fecha: newClass.Fecha,
      Tipo_Servicio: newClass.Tipo_Servicio,
      Hora_Final: newClass.Hora_Final,
      Sucursal: newClass.Sucursal,
      Modalidad: newClass.Modalidad,
      Capacidad: newClass.Capacidad,
      Instructor: newClass.Instructor
    });
    console.log(json);
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Class/createClass/" + token,
      {
        method: "POST",
        headers: myHeaders,
        body: json,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  copyWeekSchedule(token: string, newClass: Class) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Class/copySchedule/" + '1/' + newClass.Sucursal + '/' + token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }
}
