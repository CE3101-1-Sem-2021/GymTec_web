import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import { Class } from 'src/app/models/calendar/class';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { CalendarService } from 'src/app/services/calendar.service';
import { ClassService } from 'src/app/services/class.service';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { _MatRadioGroupBase } from '@angular/material/radio';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  monthYear = '';
  weekDays = ['1', '2', '3', '4', '5', '6', '7'];
  viewDate = new Date();
  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = true;
  refresh: Subject<any> = new Subject();
  view: CalendarView = CalendarView.Week;
  allClasses: Class[] = [];

  constructor(private calendarService: CalendarService, private adminService: AdminService, private classService: ClassService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.monthYear = this.calendarService.currentYear.toString() + ' ' + (this.calendarService.allMonths[this.calendarService.currentMonth].name);
    this.getAllClasses();
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  getAllClasses() {
    this.classService.getClasses(this.adminService.token).then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response.text();
    })
    .then((result) => {
      this.allClasses = JSON.parse(result) as [Class];
      this.createEvents();
    })
    .catch(async (err) => {
      err.then((result: any) => {
        console.log(result);
        this.alertService.alertError(result);
      });
    });
  }

  createEvents() {
    for(const clase of this.allClasses) {
      let startDate = new Date(clase.Fecha);
      startDate.setHours(Number(clase.Hora_Inicio.slice(0, 2)));
      let endDate = new Date(clase.Fecha);
      endDate.setHours(Number(clase.Hora_Final.slice(0, 2)));
      console.log(endDate);
      this.events.push({
        title: clase.Tipo_Servicio + ' - ' + clase.Id,
        start: startDate,
        end: endDate,
        color: {primary: '#FFFFFF', secondary: '#224975'}
      })
    }
    console.log(this.events);
  }

  copyEvents() {
    let weekEvents: Class[] = [];
    const currentDate = new Date();
    const weekStart = currentDate.getDate() - currentDate.getDay();
    const weekEnd = weekStart + 6;

    const weekStartDate = new Date(currentDate.setDate(weekStart));
    const weekEndDate = new Date(currentDate.setDate(weekEnd));

    for(const clase of this.allClasses) {
      const classDate = new Date(clase.Fecha);
      if(classDate >= weekStartDate && classDate <= weekEndDate) {
        weekEvents.push(clase);
      }
    }
    console.log(weekEvents);
    for(const event of weekEvents) {
      this.classService.copyWeekSchedule(this.adminService.token, event);
    }
    this.getAllClasses();
  }

}
