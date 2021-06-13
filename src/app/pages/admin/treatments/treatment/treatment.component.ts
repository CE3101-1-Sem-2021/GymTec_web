import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Router } from "@angular/router";
import { EventData } from "src/app/models/event-data";
import { Treatment } from "src/app/models/treatment";

@Component({
  selector: "app-treatment",
  templateUrl: "./treatment.component.html",
  styleUrls: ["./treatment.component.scss"],
})
export class TreatmentComponent implements OnInit {
  @Input() treatmentData!: Treatment;
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.raiseEvent.emit({
      eventID: "showDetails",
      attached: this.treatmentData,
    });
  }
}
