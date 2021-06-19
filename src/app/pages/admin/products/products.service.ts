import { Injectable } from "@angular/core";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}

  async getProducts(token: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Product/getAllProducts/" +
        token,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async postProducto(
    token: string,
    nombre: string,
    descripcion: string,
    codigoBarras: string,
    costo: number
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Product/createProduct/" +
        token,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          Codigo_Barras: codigoBarras,
          Nombre: nombre,
          Descripcion: descripcion,
          Costo: costo,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async updateProducto(
    token: string,
    codigoBarrasAnterior: string,
    nombre: string,
    descripcion: string,
    codigoBarras: string,
    costo: number
  ) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Product/updateProduct/" +
        codigoBarrasAnterior +
        "/" +
        token,
      {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          Codigo_Barras: codigoBarras,
          Nombre: nombre,
          Descripcion: descripcion,
          Costo: costo,
        }),
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async deleteProducto(token: string, codigoBarras: string) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud/api/Product/deleteProduct/" +
        codigoBarras +
        "/" +
        token,
      {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }
}
