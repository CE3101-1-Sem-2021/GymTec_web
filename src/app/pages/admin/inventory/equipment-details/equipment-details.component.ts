import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Equipment } from "src/app/models/equipment";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-equipment-details",
  templateUrl: "./equipment-details.component.html",
  styleUrls: ["./equipment-details.component.scss"],
})
export class EquipmentDetailsComponent implements OnInit {
  constructor() {}
  @Input() equipmentData!: Equipment;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editableTreatmentData = new Equipment();

  ngOnInit(): void {
    this.editableTreatmentData.brand = this.equipmentData.brand;
    this.editableTreatmentData.imageURL = this.equipmentData.imageURL;
    this.editableTreatmentData.name = this.equipmentData.name;
    this.editableTreatmentData.price = this.equipmentData.price;
    this.editableTreatmentData.serialNo = this.equipmentData.serialNo;
    this.editableTreatmentData.site = this.equipmentData.site;
    this.editableTreatmentData.type = this.equipmentData.type;
  }

  saveChanges() {
    this.edit = false;
    this.equipmentData = this.editableTreatmentData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.equipmentData,
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
      attached: this.equipmentData,
    });
  }
}
