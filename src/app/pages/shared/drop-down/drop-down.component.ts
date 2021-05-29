import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EventData } from '../../../models/event-data'

@Component({
  selector: 'gt-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() title: string = '';
  @Input() elemList: String[] = [];
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor() { }

  ngOnInit(): void {
  }

  selection(selection: String) {
    this.raiseEvent.emit({
      eventID: this.title,
      attached: selection
    })
  }
}
