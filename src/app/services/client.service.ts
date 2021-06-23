import { Injectable } from '@angular/core';
import { Class } from '../models/calendar/class';
import { Client } from '../models/client';
import { ClassService } from './class.service';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  token = "";
  email = "";
  allClasses: Class[] = [];
  myClasses: Class[] = [];

  constructor(private classService: ClassService) {}

  validateCredentials(usernameFld: string, passwordFld: string) {
    let json = JSON.stringify({
      email: usernameFld,
      password: passwordFld
    });
    console.log()
    this.email = usernameFld;
    return fetch(
      "https://gymtecnorelational.conveyor.cloud/api/Client/loginClient",
      {
        method: "POST",
        headers: myHeaders,
        body: json,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  registerClient(client: Client) {
    console.log(JSON.stringify(client));
    return fetch(
      "https://gymtecnorelational.conveyor.cloud/api/Client/registerClient",
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(client),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  getClasses() {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Class/searchClasses",
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({}),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  getMyClasses() {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Class/searchClasses/" +
        this.token,
      {
        method: "GET",
        headers: myHeaders,
        body: JSON.stringify({}),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  subscribeToClass(classID: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Class/classRegister/" + classID + "/" + this.token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors"
      }
    );
  }

  unsubscribeToClass(classID: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Class/classUnRegister/" + classID + "/" + this.token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors"
      }
    );
  }

  getSites() {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Class/searchClasses/" +
        this.token,
      {
        method: "GET",
        headers: myHeaders,
        body: JSON.stringify({}),
        redirect: "follow",
        mode: "cors",
      }
    );
  }
}
