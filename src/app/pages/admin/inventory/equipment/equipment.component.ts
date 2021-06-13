import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { Equipment } from "src/app/models/equipment";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.scss"],
})
export class EquipmentComponent implements OnInit {
  @Input() equipmentData!: Equipment;
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor() {}

  onClick() {
    this.raiseEvent.emit({
      eventID: "showDetails",
      attached: this.equipmentData,
    });
  }
  ngOnInit(): void {}
}
