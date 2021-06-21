import { Injectable } from '@angular/core';

const myHeaders = new Headers();
import { Class } from '../models/calendar/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  allClasses: Class[] = [{classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'} ,{classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}, {classID: 'Clase 1', type : 'Tipo 1', instructorID : 'Yolanda Azofeifa Tablada', modality : 'Grupal', capacity : 3, date: ['K', 'J'], startTime :'7:30', endingTime : '15:30'}];

  constructor() { }

  async getClasses(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Class/getAllClasses/" +
        token,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }
}
