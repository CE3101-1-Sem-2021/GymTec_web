import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-treatments",
  templateUrl: "./treatments.component.html",
  styleUrls: ["./treatments.component.scss"],
})
export class TreatmentsComponent implements OnInit {
  treatmentOptions = [
    {
      name: "Masaje relajante",
      ID: "12345",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
