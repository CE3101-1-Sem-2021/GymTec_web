import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Site } from "src/app/models/site";
import { SitePhoneNumber } from "src/app/models/site-phoneNumber";
import { SiteSchedule } from "src/app/models/site-schedule";

@Component({
  selector: "app-new-site",
  templateUrl: "./new-site.component.html",
  styleUrls: ["./new-site.component.scss"],
})
export class NewSiteComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  newPhoneNumber = new SitePhoneNumber();

  newSchedule = new SiteSchedule();

  newSite = new Site();
  constructor() {}

  ngOnInit(): void {}
  saveChanges() {
    this.raiseEvent.emit({
      eventID: "addProduct",
      attached: this.newSite,
    });
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }

  addAddress() {
    this.newPhoneNumber.Sucursal = this.newSite.Nombre;
    this.newSite.Telefonos.push({
      Telefono: this.newPhoneNumber.Telefono,
      Sucursal: this.newPhoneNumber.Sucursal,
    });
    this.newPhoneNumber.Telefono = "";
    //this.newPhoneNumber.Telefono = "";
    console.log(this.newSite.Telefonos);
  }

  removeAddress(address: any) {
    let phoneNumber = new SitePhoneNumber();
    phoneNumber.Sucursal = this.newSite.Nombre;
    phoneNumber.Telefono = address;
    let position = this.newSite.Telefonos.indexOf(phoneNumber);
    this.newSite.Telefonos.splice(position, 1);
  }

  addSchedule() {
    this.newSchedule.Sucursal = this.newSite.Nombre;
    this.newSite.Horarios.push({
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
    schedule.Sucursal = this.newSite.Nombre;
    schedule.Hora_Apertura = address.Hora_Apertura;
    schedule.Hora_Cierre = address.Hora_Cierre;
    schedule.Dia = address.Dia;
    let position = this.newSite.Horarios.indexOf(schedule);
    this.newSite.Horarios.splice(position, 1);
  }
}
