import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  constructor() {}
  @Input() productData!: Product;
  @Output() raiseEvent = new EventEmitter<EventData>();
  edit = false;

  editableProductData = new Product();

  ngOnInit(): void {
    this.editableProductData.name = this.productData.name;
    this.editableProductData.barCode = this.productData.barCode;
    this.editableProductData.description = this.productData.description;
    this.editableProductData.imageURL = this.productData.imageURL;
    this.editableProductData.price = this.productData.price;
  }

  saveChanges() {
    this.edit = false;
    this.productData = this.editableProductData;
    this.raiseEvent.emit({
      eventID: "saveChanges",
      attached: this.productData,
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
      attached: this.productData,
    });
  }
}
