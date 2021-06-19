import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Service } from "src/app/models/service";
import { AdminService } from "src/app/services/admin.service";
import { AlertService } from "src/app/services/alert.service";
import { ServiceService } from "./service.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewService = false;
  boolServiceDetails = false;
  currentService: Service = new Service();
  currentService2: Service = new Service();

  serviceOptions = [
    {
      Nombre: "99999",
      Descripcion: "Ci",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewService = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewService = false;
        this.boolServiceDetails = false;
        this.currentService2 = $event.attached;
        this.serviceService
          .postService(
            this.adminService.token,
            this.currentService2.Nombre,
            this.currentService2.Descripcion
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
        const index = this.serviceOptions.indexOf(this.currentService);
        this.serviceOptions[index] = $event.attached;
        this.currentService2 = $event.attached;
        this.serviceService
          .updateService(
            this.adminService.token,
            this.currentService.Nombre,
            this.currentService2.Nombre,
            this.currentService2.Descripcion
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
        this.boolServiceDetails = true;
        this.currentService2 = $event.attached;
        this.serviceService
          .deleteService(this.adminService.token, this.currentService2.Nombre)
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
        this.boolNewService = false;
        this.boolServiceDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolServiceDetails = true;
        this.currentService = $event.attached;
      }
    }
  }

  constructor(
    public serviceService: ServiceService,
    public adminService: AdminService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.serviceService
      .getServices(this.adminService.token)
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.serviceOptions = JSON.parse(result) as [Service];
        console.log(result);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }
}
