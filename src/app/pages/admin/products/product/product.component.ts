import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  @Input() productData!: Product;
  @Output() raiseEvent = new EventEmitter<EventData>();

  constructor() {}

  onClick() {
    this.raiseEvent.emit({
      eventID: "showDetails",
      attached: this.productData,
    });
  }
  ngOnInit(): void {}
}
