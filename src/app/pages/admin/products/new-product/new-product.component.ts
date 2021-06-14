import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.scss"],
})
export class NewProductComponent implements OnInit {
  @Output() raiseEvent = new EventEmitter<EventData>();

  newProduct = new Product();
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
