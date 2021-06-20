import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Treatment } from "src/app/models/treatment";
import { AdminService } from "src/app/services/admin.service";
import { AlertService } from "src/app/services/alert.service";
import { TreamentService } from "./treament.service";

@Component({
  selector: "app-treatments",
  templateUrl: "./treatments.component.html",
  styleUrls: ["./treatments.component.scss"],
})
export class TreatmentsComponent implements OnInit {
  boolSmokeScreen = false;
  boolNewTreatment = false;
  boolTreatmentDetails = false;
  currentTreatment: Treatment = new Treatment();

  treatmentOptions = [
    {
      Nombre: "Masaje relajante",
      Id: "12345",
      imageURL: "https://i.ytimg.com/vi/AFaezGT6wH0/maxresdefault.jpg",
    },
  ];

  currentTreatment2: Treatment = new Treatment();

  addTreatment() {
    this.boolSmokeScreen = true;
    this.boolNewTreatment = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewTreatment = false;
        this.boolTreatmentDetails = false;
        this.currentTreatment2 = $event.attached;
        this.treatmentService
          .postTreatment(this.adminService.token, this.currentTreatment2.Nombre)
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
            this.treatmentService
              .getTreatment(this.adminService.token)
              .then((response) => {
                //console.log(response.text());
                if (!response.ok) {
                  throw new Error(response.toString());
                }
                return response.text();
              })
              .then((result) => {
                this.treatmentOptions = JSON.parse(result) as [Treatment];
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

      case "saveChanges": {
        const index = this.treatmentOptions.indexOf(this.currentTreatment);
        this.treatmentOptions[index] = $event.attached;
        this.currentTreatment2 = $event.attached;
        this.treatmentService
          .updateTreatment(
            this.adminService.token,
            this.currentTreatment2.Nombre,
            this.currentTreatment2.Id
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
        this.boolTreatmentDetails = true;
        this.currentTreatment2 = $event.attached;
        this.treatmentService
          .deleteTreatment(this.adminService.token, this.currentTreatment2.Id)
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
            this.treatmentService
              .getTreatment(this.adminService.token)
              .then((response) => {
                //console.log(response.text());
                if (!response.ok) {
                  throw new Error(response.toString());
                }
                return response.text();
              })
              .then((result) => {
                this.treatmentOptions = JSON.parse(result) as [Treatment];
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
        this.boolNewTreatment = false;
        this.boolTreatmentDetails = false;
        break;
      }

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolTreatmentDetails = true;
        this.currentTreatment = $event.attached;
      }
    }
  }

  constructor(
    public treatmentService: TreamentService,
    public adminService: AdminService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.treatmentService
      .getTreatment(this.adminService.token)
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.treatmentOptions = JSON.parse(result) as [Treatment];
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
