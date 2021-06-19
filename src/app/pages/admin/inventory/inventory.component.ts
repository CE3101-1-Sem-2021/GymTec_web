import { Component, OnInit } from "@angular/core";
import { Equipment } from "src/app/models/equipment";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"],
})
export class InventoryComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewEquipment = false;
  boolEquipmentDetails = false;
  currentEquipment: Equipment = new Equipment();

  equipmentOptions = [
    {
      Tipo_Equipo: "multigimnasio",
      Marca: "CoolFitness",
      Serial: "12345",
      Costo: 99999,
      Sucursal: "Guácimo",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewEquipment = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewEquipment = false;
        this.boolEquipmentDetails = false;
        break;
      }

      case "saveChanges": {
        const index = this.equipmentOptions.indexOf(this.currentEquipment);
        this.equipmentOptions[index] = $event.attached;
        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewEquipment = false;
        this.boolEquipmentDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolEquipmentDetails = true;
        this.currentEquipment = $event.attached;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
