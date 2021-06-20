import { Component, OnInit } from "@angular/core";
import { Equipment } from "src/app/models/equipment";
import { EventData } from "src/app/models/event-data";
import { AdminService } from "src/app/services/admin.service";
import { AlertService } from "src/app/services/alert.service";
import { InventoryService } from "./inventory.service";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"],
})
export class InventoryComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewEquipment = false;
  boolEquipmentDetails = false;
  currentEquipment: Equipment = new Equipment();
  currentEquipment2: Equipment = new Equipment();
  equipmentOptions = [
    {
      Tipo_Equipo: "multigimnasio",
      Marca: "CoolFitness",
      Serial: "12345",
      Costo: 99999,
      Sucursal: "Guácimo",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewEquipment = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewEquipment = false;
        this.boolEquipmentDetails = false;
        this.currentEquipment2 = $event.attached;
        this.inventoryService
          .postMachine(
            this.adminService.token,
            this.currentEquipment2.Marca,
            this.currentEquipment2.Tipo_Equipo,
            this.currentEquipment2.Costo,
            this.currentEquipment2.Serial,
            this.currentEquipment2.Sucursal
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
            err.then((result: any) => {
              console.log(result);
              this.alertService.alertError(result);
              this.inventoryService
                .getMachines(this.adminService.token)
                .then((response) => {
                  //console.log(response.text());
                  if (!response.ok) {
                    throw new Error(response.toString());
                  }
                  return response.text();
                })
                .then((result) => {
                  this.equipmentOptions = JSON.parse(result) as [Equipment];
                  console.log(result);
                })
                .catch(async (err) => {
                  err.then((result: any) => {
                    console.log(result);
                    this.alertService.alertError(result);
                  });
                });
            });
          });

        break;
      }

      case "saveChanges": {
        const index = this.equipmentOptions.indexOf(this.currentEquipment);
        this.equipmentOptions[index] = $event.attached;
        this.currentEquipment2 = $event.attached;
        this.inventoryService
          .updateMachine(
            this.adminService.token,
            this.currentEquipment.Serial,
            this.currentEquipment2.Marca,
            this.currentEquipment2.Tipo_Equipo,
            this.currentEquipment2.Costo,
            this.currentEquipment2.Serial,
            this.currentEquipment2.Sucursal
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
            err.then((result: any) => {
              console.log(result);
              this.alertService.alertError(result);
            });
          });

        break;
      }

      case "deleteProduct": {
        this.boolSmokeScreen = true;
        this.boolEquipmentDetails = true;
        this.currentEquipment2 = $event.attached;
        this.inventoryService
          .deleteMachine(this.adminService.token, this.currentEquipment2.Serial)
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
            this.inventoryService
              .getMachines(this.adminService.token)
              .then((response) => {
                //console.log(response.text());
                if (!response.ok) {
                  throw new Error(response.toString());
                }
                return response.text();
              })
              .then((result) => {
                this.equipmentOptions = JSON.parse(result) as [Equipment];
                console.log(result);
              })
              .catch(async (err) => {
                err.then((result: any) => {
                  console.log(result);
                  this.alertService.alertError(result);
                });
              });
          })
          .catch(async (err) => {
            err.then((result: any) => {
              console.log(result);
              this.alertService.alertError(result);
            });
          });

        break;
      }

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewEquipment = false;
        this.boolEquipmentDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolEquipmentDetails = true;
        this.currentEquipment = $event.attached;
      }
    }
  }

  constructor(
    public inventoryService: InventoryService,
    public adminService: AdminService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.inventoryService
      .getMachines(this.adminService.token)
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.equipmentOptions = JSON.parse(result) as [Equipment];
        console.log(result);
      })
      .catch(async (err) => {
        err.then((result: any) => {
          console.log(result);
          this.alertService.alertError(result);
        });
      });
  }
}
