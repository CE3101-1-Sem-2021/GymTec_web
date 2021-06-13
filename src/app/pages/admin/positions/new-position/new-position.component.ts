import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Position } from "src/app/models/position";

@Component({
  selector: "app-new-position",
  templateUrl: "./new-position.component.html",
  styleUrls: ["./new-position.component.scss"],
})
export class NewPositionComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  newPosition = new Position();
  constructor() {}

  ngOnInit(): void {}
  saveChanges() {
    this.raiseEvent.emit({
      eventID: "addProduct",
      attached: this.newPosition,
    });
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }
}
