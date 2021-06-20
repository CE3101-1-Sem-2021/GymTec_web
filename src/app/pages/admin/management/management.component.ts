import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-management",
  templateUrl: "./management.component.html",
  styleUrls: ["./management.component.scss"],
})
export class ManagementComponent implements OnInit {
  menuOptions = [
    {
      title: "Sucursales",
      image:
        "https://www.larepublica.net/storage/images/2020/05/04/20200504072925.face-golds.jpeg",
      url: "pages/admin/sites",
    },
    {
      title: "Tratamientos de Spa",
      image:
        "https://x6i2p6h3.rocketcdn.me/wp-content/uploads/2019/11/emprender-un-negocio-spa-insumos-1024x683.jpg",
      url: "pages/admin/treatments",
    },
    {
      title: "Puestos",
      image:
        "https://trucoslondres.com/wp-content/uploads/2017/03/professions.jpg",
      url: "pages/admin/positions",
    },
    {
      title: "Tipos de planilla",
      image:
        "https://bbl-bdb.s3.amazonaws.com/sets/images/Gestion_de_informacion_y_finanzas.jpg",
      url: "pages/admin/payroll-types",
    },
    {
      title: "Empleados",
      image:
        "https://www.basic-fit.com/on/demandware.static/-/Library-Sites-basic-fit-shared-library/default/dw12cd98f1/Roots/Blog/Blog-Header/1088x612/18-01-Blog-Fitness-Information-personal-trainer.jpg",
      url: "pages/admin/employees",
    },
    {
      title: "Servicios",
      image:
        "https://www.hola.com/imagenes/decoracion/20200605169493/piscina-mantenimiento-disfrutar-verano-mc/0-832-472/piscina-disfrutar-verano-m.jpg",
      url: "pages/admin/services",
    },
    {
      title: "Tipos de equipo",
      image:
        "https://ventaspop-images.staticgnt.com/XzJcJoqFN2-iByp2EZdj1U4AR7s=/filters:quality(70):strip_exif()/files/products/252/881/EVO3500.png",
      url: "pages/admin/equipment-type",
    },
    {
      title: "Inventario",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71qjKny9LsL._AC_SX425_.jpg",
      url: "pages/admin/inventory",
    },
    {
      title: "Productos",
      image:
        "https://www.totemfit.es/wp-content/uploads/2016/07/ofertas-en-suplementos-deportivos.jpg",
      url: "pages/admin/products",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
