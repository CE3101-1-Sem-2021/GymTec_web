import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Site } from "src/app/models/site";

@Component({
  selector: "app-site-details",
  templateUrl: "./site-details.component.html",
  styleUrls: ["./site-details.component.scss"],
})
export class SiteDetailsComponent implements OnInit {
  constructor() {}
  @Input() siteData!: Site;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editableSiteData = new Site();

  ngOnInit(): void {
    this.editableSiteData.name = this.siteData.name;
    this.editableSiteData.boolSpa = this.siteData.boolSpa;
    this.editableSiteData.boolStore = this.siteData.boolStore;
    this.editableSiteData.canton = this.siteData.canton;
    this.editableSiteData.capacity = this.siteData.capacity;
    this.editableSiteData.district = this.siteData.district;
    this.editableSiteData.imageURL = this.siteData.imageURL;
    this.editableSiteData.managerID = this.siteData.managerID;
    this.editableSiteData.openingDate = this.siteData.openingDate;
    this.editableSiteData.phoneNumber = this.siteData.phoneNumber;
    this.editableSiteData.province = this.siteData.province;
    this.editableSiteData.schedule = this.siteData.schedule;
  }

  saveChanges() {
    this.edit = false;
    this.siteData = this.editableSiteData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.siteData,
    });
  }

  editProduct() {
    this.edit = true;
  }

  cancel() {
    this.edit = false;
  }

  return() {
    this.raiseEvent.emit({
      eventID: "unchangedProduct",
      attached: null,
    });
  }

  delete() {
    this.raiseEvent.emit({
      eventID: "deleteProduct",
      attached: this.siteData,
    });
  }
}
