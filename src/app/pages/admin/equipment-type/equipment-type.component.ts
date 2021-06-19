import { Component, OnInit } from "@angular/core";
import { EquipmentType } from "src/app/models/equipment-type";
import { EventData } from "src/app/models/event-data";
import { AdminService } from "src/app/services/admin.service";
import { AlertService } from "src/app/services/alert.service";
import { EquipmentTypeService } from "./equipment-type.service";

@Component({
  selector: "app-equipment-type",
  templateUrl: "./equipment-type.component.html",
  styleUrls: ["./equipment-type.component.scss"],
})
export class EquipmentTypeComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewEquipmentType = false;
  boolEquipmentDetails = false;
  currentEquipmentType: EquipmentType = new EquipmentType();
  currentEquipmentType2: EquipmentType = new EquipmentType();

  equipmentTypeOptions = [
    {
      Nombre: "multigimnasio",
      Descripcion: "ci",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewEquipmentType = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewEquipmentType = false;
        this.boolEquipmentDetails = false;
        this.currentEquipmentType2 = $event.attached;
        this.equipmentTypeService
          .postEquipmentType(
            this.adminService.token,
            this.currentEquipmentType2.Nombre,
            this.currentEquipmentType2.Descripcion
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
        const index = this.equipmentTypeOptions.indexOf(
          this.currentEquipmentType
        );
        this.equipmentTypeOptions[index] = $event.attached;
        this.currentEquipmentType2 = $event.attached;
        this.equipmentTypeService
          .updateEquipmentType(
            this.adminService.token,
            this.currentEquipmentType.Nombre,
            this.currentEquipmentType2.Nombre,
            this.currentEquipmentType2.Descripcion
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
        this.boolEquipmentDetails = true;
        this.currentEquipmentType2 = $event.attached;
        this.equipmentTypeService
          .deleteEquipmentType(
            this.adminService.token,
            this.currentEquipmentType2.Nombre
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
        this.boolNewEquipmentType = false;
        this.boolEquipmentDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolEquipmentDetails = true;
        this.currentEquipmentType = $event.attached;
      }
    }
  }

  constructor(
    public equipmentTypeService: EquipmentTypeService,
    public adminService: AdminService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.equipmentTypeService
      .getEquipmentTypes(this.adminService.token)
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.equipmentTypeOptions = JSON.parse(result) as [EquipmentType];
        console.log(result);
      })
      .catch(async (err) => {
        console.log(err);
      });
  }
}
