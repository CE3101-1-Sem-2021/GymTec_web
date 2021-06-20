import { Injectable } from '@angular/core';

import MonthsJSON from '../../assets/months.json';
import { Month } from '../models/calendar/month'

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  allMonths: Month[] = [];
  currentDate: Date = new Date();
  currentYear = 2000;
  currentMonth = 0;
  currentDay = 0;
  weekDay = 0;

  constructor() {
    this.allMonths = MonthsJSON;
    this.currentMonth = this.currentDate.getUTCMonth() + 1;
    this.currentDay = this.currentDate.getUTCDate();
    this.currentYear = this.currentDate.getUTCFullYear();
    this.weekDay = this.currentDate.getDay();
   }

  getCurrentDate() {
    
  }
}
