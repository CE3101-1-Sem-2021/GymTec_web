import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewProduct = false;
  boolProductDetails = false;
  currentProduct: Product = new Product();

  productOptions = [
    {
      name: "Pesa",
      barCode: "10929300",
      description: "Ci",
      price: 0,
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewProduct = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewProduct = false;
        this.boolProductDetails = false;
        break;
      }

      case "saveChanges": {
        const index = this.productOptions.indexOf(this.currentProduct);
        this.productOptions[index] = $event.attached;
        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewProduct = false;
        this.boolProductDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolProductDetails = true;
        this.currentProduct = $event.attached;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
