import { SitePhoneNumber } from "./site-phoneNumber";
import { SiteSchedule } from "./site-schedule";

export class Site {
  Nombre = "";
  Provincia = "";
  Canton = "";
  Distrito = "";
  Fecha_Apertura = "";
  Horarios: SiteSchedule[] = [];
  Gerente = "";
  Capacidad_Max = 0;
  Telefonos: SitePhoneNumber[] = [];
  Spa_Act = false;
  Tienda_Act = false;
  imageURL = "";
}
