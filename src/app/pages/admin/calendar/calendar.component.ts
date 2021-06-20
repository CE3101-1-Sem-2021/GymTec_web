import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  isTwoMonth = false;
  monthYear = '';
  weekDays = ['1', '2', '3', '4', '5', '6', '7']

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.monthYear = this.calendarService.currentYear.toString() + ' ' + (this.calendarService.allMonths[this.calendarService.currentMonth].name);
  }

  getWeekDays() {
    
  }

}
