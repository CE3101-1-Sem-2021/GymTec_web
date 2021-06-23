import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { EventData } from 'src/app/models/event-data';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  date: any;

  constructor() { }

  ngOnInit(): void {
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.raiseEvent.emit({
      eventID: 'Date',
      attached: event
    })
  }
}
