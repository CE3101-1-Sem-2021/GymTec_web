import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendar',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `<ejs-schedule> </ejs-schedule>`,
  //templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
