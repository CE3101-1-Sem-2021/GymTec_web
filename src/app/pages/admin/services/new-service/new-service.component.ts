import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Service } from "src/app/models/service";

@Component({
  selector: "app-new-service",
  templateUrl: "./new-service.component.html",
  styleUrls: ["./new-service.component.scss"],
})
export class NewServiceComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  newService = new Service();
  constructor() {}

  ngOnInit(): void {}
  saveChanges() {
    this.raiseEvent.emit({
      eventID: "addProduct",
      attached: this.newService,
    });
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }
}
