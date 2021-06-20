import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Site } from "src/app/models/site";
import { SitePhoneNumber } from "src/app/models/site-phoneNumber";
import { SiteSchedule } from "src/app/models/site-schedule";

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

  newPhoneNumber = new SitePhoneNumber();

  newSchedule = new SiteSchedule();

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

  addAddress() {
    this.newPhoneNumber.Sucursal = this.siteData.Nombre;
    this.siteData.Telefonos.push({
      Telefono: this.newPhoneNumber.Telefono,
      Sucursal: this.newPhoneNumber.Sucursal,
    });
    this.newPhoneNumber.Telefono = "";
    //this.newPhoneNumber.Telefono = "";
    console.log(this.siteData.Telefonos);
  }

  removeAddress(address: any) {
    let phoneNumber = new SitePhoneNumber();
    phoneNumber.Sucursal = this.editableSiteData.Nombre;
    phoneNumber.Telefono = address;
    for (let i = 0; i < this.editableSiteData.Telefonos.length; i++) {
      if (this.editableSiteData.Telefonos[i].Telefono == phoneNumber.Telefono) {
        this.editableSiteData.Telefonos.splice(i, 1);
      }
    }
    //let position = this.editableSiteData.Telefonos.findIndex(phoneNumber);
    console.log(this.editableSiteData.Telefonos);
    console.log(phoneNumber);
    //this.editableSiteData.Telefonos.splice(position, 1);
  }

  addSchedule() {
    this.newSchedule.Sucursal = this.editableSiteData.Nombre;
    this.editableSiteData.Horarios.push({
      Dia: this.newSchedule.Dia,
      Sucursal: this.newSchedule.Sucursal,
      Hora_Apertura: this.newSchedule.Hora_Apertura,
      Hora_Cierre: this.newSchedule.Hora_Cierre,
    });
    this.newSchedule.Dia = "";
    this.newSchedule.Hora_Apertura = "";
    this.newSchedule.Hora_Cierre = "";
    //this.newPhoneNumber.Telefono = "";
  }

  removeSchedule(address: SiteSchedule) {
    let schedule = new SiteSchedule();
    schedule.Sucursal = this.editableSiteData.Nombre;
    schedule.Hora_Apertura = address.Hora_Apertura;
    schedule.Hora_Cierre = address.Hora_Cierre;
    schedule.Dia = address.Dia;
    for (let i = 0; i < this.editableSiteData.Horarios.length; i++) {
      if (
        this.editableSiteData.Horarios[i].Dia == schedule.Dia &&
        this.editableSiteData.Horarios[i].Hora_Apertura ==
          schedule.Hora_Apertura &&
        this.editableSiteData.Horarios[i].Hora_Cierre == schedule.Hora_Cierre
      ) {
        this.editableSiteData.Horarios.splice(i, 1);
      }
    }
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
