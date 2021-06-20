import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from 'src/app/models/class';
import { EventData } from 'src/app/models/event-data';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {
  @Input() allClasses!: Class[];
  @Output() raiseEvent = new EventEmitter<EventData>();

  newClass: Class = new Class();
  tmpList = [];
  modality = ['Grupal', 'Individual'];
  weekDays = ['L', 'K', 'M', 'J', 'V', 'S', 'D'];
  schedules = ['7:30 - 9:20 ', '9:30 - 11:20 ', '13:00 - 14:50 ', '15:00 - 16:50 ', '17:00 - 18:50 ', '19:00 - 20:50 '];
  instructors = ['Instructor1'];


  constructor() { }

  ngOnInit(): void {
  }

  return() {
    this.raiseEvent.emit({
      eventID: 'hideClasses',
      attached: null
    })
  }

  createClass() {
    console.log(this.newClass);
    if(this.newClass.classID != '' && this.newClass.type != '' && this.newClass.instructorID != '' && this.newClass.modality != '' && this.newClass.capacity != 0 && this.newClass.date != [] && this.newClass.startTime != '' && this.newClass.endingTime != '') {
      this.raiseEvent.emit({
        eventID: 'createdClasses',
        attached: this.newClass
      })
      this.allClasses.push(this.newClass);
      this.newClass = new Class();
    }
    else {
      this.raiseEvent.emit({
        eventID: 'failedClassCreation',
        attached: null
      })
    }
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      case 'Instructor(a)': {
        this.newClass.instructorID = $event.attached;
        break
      };
      case 'Modalidad': {
        this.newClass.modality = $event.attached;
        break;
      };
      case 'Dias': {
        this.newClass.date = $event.attached;
        break;
      };
      case 'Horario': {
        let startTime = $event.attached.slice(0, 5).trim();
        let size = $event.attached.length;
        let endTime = $event.attached.slice(7, size).trim();
        this.newClass.startTime = startTime;
        this.newClass.endingTime = endTime;
        break;
      }
    }
  }

}
