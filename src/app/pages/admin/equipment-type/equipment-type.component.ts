import { Component, OnInit } from "@angular/core";
import { EquipmentType } from "src/app/models/equipment-type";
import { EventData } from "src/app/models/event-data";

@Component({
  selector: "app-equipment-type",
  templateUrl: "./equipment-type.component.html",
  styleUrls: ["./equipment-type.component.scss"],
})
export class EquipmentTypeComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewEquipmentType = false;
  boolEquipmentDetails = false;
  currentEquipmentType: EquipmentType = new EquipmentType();

  equipmentTypeOptions = [
    {
      name: "multigimnasio",
      description: "ci",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewEquipmentType = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewEquipmentType = false;
        this.boolEquipmentDetails = false;
        break;
      }

      case "saveChanges": {
        const index = this.equipmentTypeOptions.indexOf(
          this.currentEquipmentType
        );
        this.equipmentTypeOptions[index] = $event.attached;
        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewEquipmentType = false;
        this.boolEquipmentDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolEquipmentDetails = true;
        this.currentEquipmentType = $event.attached;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
