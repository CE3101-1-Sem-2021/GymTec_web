import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';

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

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.monthYear = this.calendarService.currentYear.toString() + ' ' + (this.calendarService.allMonths[this.calendarService.currentMonth].name);
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
