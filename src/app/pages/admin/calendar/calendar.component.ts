import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
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

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.monthYear = this.calendarService.currentYear.toString() + ' ' + (this.calendarService.allMonths[this.calendarService.currentMonth].name);
  }

  getWeekDays() {
    
  }

}
