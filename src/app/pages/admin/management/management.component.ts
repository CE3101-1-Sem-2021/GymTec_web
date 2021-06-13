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
      image: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      url: "pages/admin/sites",
    },
    {
      title: "Tratamientos de Spa",
      image: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      url: "pages/admin/treatments",
    },
    {
      title: "Puestos",
      image: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      url: "pages/admin/positions",
    },
    {
      title: "Tipos de planilla",
      image: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      url: "pages/admin/payroll-types",
    },
    {
      title: "Empleados",
      image: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      url: "pages/admin/employees",
    },
    {
      title: "Servicios",
      image: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      url: "pages/admin/services",
    },
    {
      title: "Tipos de equipo",
      image: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      url: "pages/admin/equipment-type",
    },
    {
      title: "Inventario",
      image: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      url: "pages/admin/inventory",
    },
    {
      title: "Productos",
      image: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
      url: "pages/admin/products",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
