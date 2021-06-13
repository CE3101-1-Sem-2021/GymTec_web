import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Treatment } from "src/app/models/treatment";

@Component({
  selector: "app-treatments",
  templateUrl: "./treatments.component.html",
  styleUrls: ["./treatments.component.scss"],
})
export class TreatmentsComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewTreatment = false;
  boolTreatmentDetails = false;
  currentTreatment: Treatment = new Treatment();

  treatmentOptions = [
    {
      name: "Masaje relajante",
      ID: "12345",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addTreatment() {
    this.boolSmokeScreen = true;
    this.boolNewTreatment = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewTreatment = false;
        this.boolTreatmentDetails = false;
        break;
      }

      case "saveChanges": {
        const index = this.treatmentOptions.indexOf(this.currentTreatment);
        this.treatmentOptions[index] = $event.attached;
        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewTreatment = false;
        this.boolTreatmentDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolTreatmentDetails = true;
        this.currentTreatment = $event.attached;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
