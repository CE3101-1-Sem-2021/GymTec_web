import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Service } from "src/app/models/service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewService = false;
  boolServiceDetails = false;
  currentService: Service = new Service();

  serviceOptions = [
    {
      name: "99999",
      description: "Ci",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewService = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewService = false;
        this.boolServiceDetails = false;
        break;
      }

      case "saveChanges": {
        const index = this.serviceOptions.indexOf(this.currentService);
        this.serviceOptions[index] = $event.attached;
        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewService = false;
        this.boolServiceDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolServiceDetails = true;
        this.currentService = $event.attached;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
