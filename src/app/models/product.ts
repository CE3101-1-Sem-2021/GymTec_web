import { Site } from "./site";

export class Product {
  Nombre = "";
  Codigo_Barras = "";
  Descripcion = "";
  Costo = 0;
  imageURL = "";
  Sucursals: Site[] = [];
}
