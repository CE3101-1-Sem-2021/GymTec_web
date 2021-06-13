import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EquipmentType } from "src/app/models/equipment-type";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-equipment-type-details",
  templateUrl: "./equipment-type-details.component.html",
  styleUrls: ["./equipment-type-details.component.scss"],
})
export class EquipmentTypeDetailsComponent implements OnInit {
  constructor() {}
  @Input() equipmentTypeData!: EquipmentType;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editableEquipmentTypeData = new EquipmentType();

  ngOnInit(): void {
    this.editableEquipmentTypeData.name = this.equipmentTypeData.name;
    this.editableEquipmentTypeData.imageURL = this.equipmentTypeData.imageURL;
    this.editableEquipmentTypeData.description =
      this.equipmentTypeData.description;
  }

  saveChanges() {
    this.edit = false;
    this.equipmentTypeData = this.editableEquipmentTypeData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.equipmentTypeData,
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
      attached: this.equipmentTypeData,
    });
  }
}
