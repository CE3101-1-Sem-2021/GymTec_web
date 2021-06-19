import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Treatment } from "src/app/models/treatment";

@Component({
  selector: "app-treatment-details",
  templateUrl: "./treatment-details.component.html",
  styleUrls: ["./treatment-details.component.scss"],
})
export class TreatmentDetailsComponent implements OnInit {
  constructor() {}
  @Input() treatmentData!: Treatment;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editableTreatmentData = new Treatment();

  ngOnInit(): void {
    this.editableTreatmentData.Id = this.treatmentData.Id;
    this.editableTreatmentData.Nombre = this.treatmentData.Nombre;
    this.editableTreatmentData.imageURL = this.treatmentData.imageURL;
  }

  saveChanges() {
    this.edit = false;
    this.treatmentData = this.editableTreatmentData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.treatmentData,
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
      attached: this.treatmentData,
    });
  }
}
