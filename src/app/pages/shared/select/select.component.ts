import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventData } from 'src/app/models/event-data';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() title: string = '';
  @Input() elemList: String[] = [];
  @Output() raiseEvent = new EventEmitter<EventData>();

  selectedItems = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  selection() {
    this.raiseEvent.emit({
      eventID: this.title,
      attached: this.selectedItems.value
    })
  }
}
