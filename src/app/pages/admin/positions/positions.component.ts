import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Position } from "src/app/models/position";

@Component({
  selector: "app-positions",
  templateUrl: "./positions.component.html",
  styleUrls: ["./positions.component.scss"],
})
export class PositionsComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewPosition = false;
  boolPositionDetails = false;
  currentPosition: Position = new Position();

  positionOptions = [
    {
      name: "Jefe",
      description: "Ci",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewPosition = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewPosition = false;
        this.boolPositionDetails = false;
        break;
      }

      case "saveChanges": {
        const index = this.positionOptions.indexOf(this.currentPosition);
        this.positionOptions[index] = $event.attached;
        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewPosition = false;
        this.boolPositionDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolPositionDetails = true;
        this.currentPosition = $event.attached;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
