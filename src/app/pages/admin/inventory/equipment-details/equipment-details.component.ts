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
    this.editableTreatmentData.Marca = this.equipmentData.Marca;
    this.editableTreatmentData.imageURL = this.equipmentData.imageURL;
    this.editableTreatmentData.Costo = this.equipmentData.Costo;
    this.editableTreatmentData.Serial = this.equipmentData.Serial;
    this.editableTreatmentData.Sucursal = this.equipmentData.Sucursal;
    this.editableTreatmentData.Tipo_Equipo = this.equipmentData.Tipo_Equipo;
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
