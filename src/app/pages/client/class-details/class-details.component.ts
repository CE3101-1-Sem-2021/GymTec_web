import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from 'src/app/models/calendar/class';
import { EventData } from 'src/app/models/event-data';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {
  @Input() classData!: Class;
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor() { }

  ngOnInit(): void {
  }

  return() {
    this.raiseEvent.emit({
      eventID: "return",
      attached: null,
    });
  }

  subscribe() {
    this.raiseEvent.emit({
      eventID: "subscribe",
      attached: this.classData,
    });
  }

}
