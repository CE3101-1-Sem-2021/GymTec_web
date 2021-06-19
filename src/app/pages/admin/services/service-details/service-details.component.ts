import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Service } from "src/app/models/service";

@Component({
  selector: "app-service-details",
  templateUrl: "./service-details.component.html",
  styleUrls: ["./service-details.component.scss"],
})
export class ServiceDetailsComponent implements OnInit {
  constructor() {}
  @Input() serviceData!: Service;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editableServiceData = new Service();

  ngOnInit(): void {
    this.editableServiceData.Descripcion = this.serviceData.Descripcion;
    this.editableServiceData.Nombre = this.serviceData.Nombre;
    this.editableServiceData.imageURL = this.serviceData.imageURL;
  }

  saveChanges() {
    this.edit = false;
    this.serviceData = this.editableServiceData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.serviceData,
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
      attached: this.serviceData,
    });
  }
}
