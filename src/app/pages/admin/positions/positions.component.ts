import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Position } from "src/app/models/position";
import { AdminService } from "src/app/services/admin.service";
import { AlertService } from "src/app/services/alert.service";
import { PositionsServiceService } from "./positions-service.service";

@Component({
  selector: "app-positions",
  templateUrl: "./positions.component.html",
  styleUrls: ["./positions.component.scss"],
})
export class PositionsComponent implements OnInit {
  constructor(
    public positionsService: PositionsServiceService,
    public adminService: AdminService,
    public alertService: AlertService
  ) {}

  boolSmokeScreen = false;
  boolNewPosition = false;
  boolPositionDetails = false;
  currentPosition: Position = new Position();

  currentPosition2: Position = new Position();
  positionOptions = [
    {
      Nombre: "Jefe",
      Descripcion: "Ci",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewPosition = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewPosition = false;
        this.boolPositionDetails = false;
        this.currentPosition2 = $event.attached;
        this.positionsService
          .postPuesto(
            this.adminService.token,
            this.currentPosition2.Nombre,
            this.currentPosition2.Descripcion
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
          })
          .catch(async (err) => {
            console.log(err);
          });

        break;
      }

      case "saveChanges": {
        const index = this.positionOptions.indexOf(this.currentPosition);
        this.positionOptions[index] = $event.attached;
        this.currentPosition2 = $event.attached;
        this.positionsService
          .updatePuesto(
            this.adminService.token,
            this.currentPosition.Nombre,
            this.currentPosition2.Nombre,
            this.currentPosition2.Descripcion
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
          })
          .catch(async (err) => {
            console.log(err);
          });

        break;
      }

      case "deleteProduct": {
        this.boolSmokeScreen = true;
        this.boolPositionDetails = true;
        this.currentPosition2 = $event.attached;
        this.positionsService
          .deletePuesto(this.adminService.token, this.currentPosition2.Nombre)
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw response.text();
            }
            return response.text();
          })
          .then((result) => {
            console.log(result);
            this.alertService.alertSuccess("Puesto eliminado exitosamente");
          })
          .catch(async (err) => {
            console.log(err);
            this.alertService.alertError(err);
          });

        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewPosition = false;
        this.boolPositionDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolPositionDetails = true;
        this.currentPosition = $event.attached;
        break;
      }
    }
  }
  ngOnInit(): void {
    this.positionsService
      .getPuestos(this.adminService.token)
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.positionOptions = JSON.parse(result) as [Position];
        console.log(result);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }
}
