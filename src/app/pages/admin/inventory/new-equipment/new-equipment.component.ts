import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Equipment } from "src/app/models/equipment";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-new-equipment",
  templateUrl: "./new-equipment.component.html",
  styleUrls: ["./new-equipment.component.scss"],
})
export class NewEquipmentComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  newEquipment = new Equipment();
  constructor() {}

  ngOnInit(): void {}
  saveChanges() {
    this.raiseEvent.emit({
      eventID: "addProduct",
      attached: this.newEquipment,
    });
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }
}
