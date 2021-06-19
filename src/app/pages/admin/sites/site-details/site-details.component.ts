import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Site } from "src/app/models/site";

@Component({
  selector: "app-site-details",
  templateUrl: "./site-details.component.html",
  styleUrls: ["./site-details.component.scss"],
})
export class SiteDetailsComponent implements OnInit {
  constructor() {}
  @Input() siteData!: Site;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editableSiteData = new Site();

  ngOnInit(): void {
    this.editableSiteData.Nombre = this.siteData.Nombre;
    this.editableSiteData.Spa_Act = this.siteData.Spa_Act;
    this.editableSiteData.Tienda_Act = this.siteData.Tienda_Act;
    this.editableSiteData.Canton = this.siteData.Canton;
    this.editableSiteData.Capacidad_Max = this.siteData.Capacidad_Max;
    this.editableSiteData.Distrito = this.siteData.Distrito;
    this.editableSiteData.imageURL = this.siteData.imageURL;
    this.editableSiteData.Gerente = this.siteData.Gerente;
    this.editableSiteData.Fecha_Apertura = this.siteData.Fecha_Apertura;
    this.editableSiteData.Telefonos = this.siteData.Telefonos;
    this.editableSiteData.Provincia = this.siteData.Provincia;
    this.editableSiteData.Horarios = this.siteData.Horarios;
  }

  saveChanges() {
    this.edit = false;
    this.siteData = this.editableSiteData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.siteData,
    });
  }

  activateSpa() {
    this.siteData = this.editableSiteData;
    this.raiseEvent.emit({
      eventID: "activateSpa",
      attached: this.siteData,
    });
  }

  activateStore() {
    this.siteData = this.editableSiteData;
    this.raiseEvent.emit({
      eventID: "activateStore",
      attached: this.siteData,
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
      attached: this.siteData,
    });
  }
}
