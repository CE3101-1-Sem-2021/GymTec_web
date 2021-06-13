import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EquipmentType } from "src/app/models/equipment-type";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-equipment-type-instance",
  templateUrl: "./equipment-type-instance.component.html",
  styleUrls: ["./equipment-type-instance.component.scss"],
})
export class EquipmentTypeInstanceComponent implements OnInit {
  @Input() equipmentTypeData!: EquipmentType;
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor() {}

  onClick() {
    this.raiseEvent.emit({
      eventID: "showDetails",
      attached: this.equipmentTypeData,
    });
  }

  ngOnInit(): void {}
}
