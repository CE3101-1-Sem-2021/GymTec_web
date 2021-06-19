import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Product } from "src/app/models/product";
import { AdminService } from "src/app/services/admin.service";
import { AlertService } from "src/app/services/alert.service";
import { ProductsService } from "./products.service";

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
  currentProduct2: Product = new Product();

  productOptions = [
    {
      Nombre: "Pesa",
      Codigo_Barras: "10929300",
      Descripcion: "Ci",
      Costo: 0,
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
        this.currentProduct2 = $event.attached;
        this.productsService
          .postProducto(
            this.adminService.token,
            this.currentProduct2.Nombre,
            this.currentProduct2.Descripcion,
            this.currentProduct2.Codigo_Barras,
            this.currentProduct2.Costo
          )
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw response.text();
            }
            return response.text();
          })
          .then((result) => {
            console.log(result);
            this.alertService.alertSuccess(result);
          })
          .catch(async (err) => {
            console.log(err);
          });

        break;
      }

      case "saveChanges": {
        const index = this.productOptions.indexOf(this.currentProduct);
        this.productOptions[index] = $event.attached;
        this.currentProduct2 = $event.attached;
        this.productsService
          .updateProducto(
            this.adminService.token,
            this.currentProduct.Codigo_Barras,
            this.currentProduct2.Nombre,
            this.currentProduct2.Descripcion,
            this.currentProduct2.Codigo_Barras,
            this.currentProduct2.Costo
          )
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw response.text();
            }
            return response.text();
          })
          .then((result) => {
            console.log(result);
            this.alertService.alertSuccess(result);
          })
          .catch(async (err) => {
            console.log(err);
          });

        break;
      }

      case "deleteProduct": {
        this.boolSmokeScreen = true;
        this.boolProductDetails = true;
        this.currentProduct2 = $event.attached;
        this.productsService
          .deleteProducto(
            this.adminService.token,
            this.currentProduct2.Codigo_Barras
          )
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw response.text();
            }
            return response.text();
          })
          .then((result) => {
            console.log(result);
            this.alertService.alertSuccess(result);
          })
          .catch(async (err) => {
            console.log(err);
            this.alertService.alertError(err);
          });

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

  constructor(
    public productsService: ProductsService,
    public adminService: AdminService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.productsService
      .getProducts(this.adminService.token)
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.productOptions = JSON.parse(result) as [Product];
        console.log(result);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }
}
