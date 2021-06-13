import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EquipmentType } from "src/app/models/equipment-type";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-new-equipment-type",
  templateUrl: "./new-equipment-type.component.html",
  styleUrls: ["./new-equipment-type.component.scss"],
})
export class NewEquipmentTypeComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  newEquipmentType = new EquipmentType();
  constructor() {}

  ngOnInit(): void {}
  saveChanges() {
    this.raiseEvent.emit({
      eventID: "addProduct",
      attached: this.newEquipmentType,
    });
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }
}
