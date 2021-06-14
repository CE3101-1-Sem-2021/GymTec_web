import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Site } from "src/app/models/site";

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"],
})
export class SiteComponent implements OnInit {
  @Input() siteData!: Site;
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor() {}

  onClick() {
    this.raiseEvent.emit({
      eventID: "showDetails",
      attached: this.siteData,
    });
  }
  ngOnInit(): void {}
}
