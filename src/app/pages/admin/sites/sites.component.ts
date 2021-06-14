import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Site } from "src/app/models/site";

@Component({
  selector: "app-sites",
  templateUrl: "./sites.component.html",
  styleUrls: ["./sites.component.scss"],
})
export class SitesComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewSite = false;
  boolSiteDetails = false;
  currentSite: Site = new Site();

  siteOptions = [
    {
      name: "Guácimo",
      province: "Limón",
      canton: "Guácimo",
      district: "Centro",
      openingDate: "2020-01-07T00:00:00",
      schedule: [
        {
          Dia: "Jueves",
          Sucursal: "Guácimo",
          Hora_Apertura: "07:00:00",
          Hora_Cierre: "17:00:00",
        },
      ],
      managerID: "1234",
      capacity: 0,
      phoneNumber: [
        {
          Telefono: "87249591",
          Sucursal: "Guácimo",
        },
      ],
      boolSpa: false,
      boolStore: false,
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewSite = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewSite = false;
        this.boolSiteDetails = false;
        break;
      }

      case "saveChanges": {
        const index = this.siteOptions.indexOf(this.currentSite);
        this.siteOptions[index] = $event.attached;
        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewSite = false;
        this.boolSiteDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolSiteDetails = true;
        this.currentSite = $event.attached;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
