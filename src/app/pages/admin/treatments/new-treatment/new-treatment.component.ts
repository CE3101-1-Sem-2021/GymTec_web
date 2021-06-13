import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Treatment } from "src/app/models/treatment";

@Component({
  selector: "app-new-treatment",
  templateUrl: "./new-treatment.component.html",
  styleUrls: ["./new-treatment.component.scss"],
})
export class NewTreatmentComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  newProduct = new Treatment();
  constructor() {}

  ngOnInit(): void {}

  saveChanges() {
    this.raiseEvent.emit({
      eventID: "addProduct",
      attached: this.newProduct,
    });
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }
}
