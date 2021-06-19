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
    this.editableProductData.Nombre = this.productData.Nombre;
    this.editableProductData.Codigo_Barras = this.productData.Codigo_Barras;
    this.editableProductData.Descripcion = this.productData.Descripcion;
    this.editableProductData.imageURL = this.productData.imageURL;
    this.editableProductData.Costo = this.productData.Costo;
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
