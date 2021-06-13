import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Position } from "src/app/models/position";

@Component({
  selector: "app-position-details",
  templateUrl: "./position-details.component.html",
  styleUrls: ["./position-details.component.scss"],
})
export class PositionDetailsComponent implements OnInit {
  constructor() {}
  @Input() positionData!: Position;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editablePositionData = new Position();

  ngOnInit(): void {
    this.editablePositionData.name = this.positionData.name;
    this.editablePositionData.imageURL = this.positionData.imageURL;
    this.editablePositionData.description = this.positionData.description;
  }

  saveChanges() {
    this.edit = false;
    this.positionData = this.editablePositionData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.positionData,
    });
  }

  editProduct() {
    this.edit = true;
  }

  cancel() {
    this.edit = false;
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }

  delete() {
    this.raiseEvent.emit({
      eventID: "deleteProduct",
      attached: this.positionData,
    });
  }
}
