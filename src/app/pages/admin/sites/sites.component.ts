import { Component, OnInit } from "@angular/core";
import { EventData } from "src/app/models/event-data";
import { Site } from "src/app/models/site";
import { AdminService } from "src/app/services/admin.service";
import { AlertService } from "src/app/services/alert.service";
import { SitesService } from "./sites.service";

@Component({
  selector: "app-sites",
  templateUrl: "./sites.component.html",
  styleUrls: ["./sites.component.scss"],
})
export class SitesComponent implements OnInit {
  constructor(
    public sitesService: SitesService,
    public adminService: AdminService,
    public alertService: AlertService
  ) {}

  boolSmokeScreen = false;
  boolNewSite = false;
  boolSiteDetails = false;
  currentSite: Site = new Site();

  currentSite2: Site = new Site();
  siteOptions: Site[] = [];

  addEquipment() {
    this.boolSmokeScreen = true;
    this.boolNewSite = true;
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case "addProduct": {
        this.boolSmokeScreen = false;
        this.boolNewSite = false;
        this.boolSiteDetails = false;
        this.currentSite2 = $event.attached;
        this.sitesService
          .postSite(
            this.adminService.token,
            this.currentSite2.Nombre,
            this.currentSite2.Provincia,
            this.currentSite2.Canton,
            this.currentSite2.Distrito,
            this.currentSite2.Fecha_Apertura,
            this.currentSite2.Capacidad_Max,
            this.currentSite2.Horarios,
            this.currentSite2.Telefonos,
            this.currentSite2.Spa_Act,
            this.currentSite2.Tienda_Act
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
            this.sitesService
              .getSites(this.adminService.token)
              .then((response) => {
                //console.log(response.text());
                if (!response.ok) {
                  throw new Error(response.toString());
                }
                return response.text();
              })
              .then((result) => {
                this.siteOptions = JSON.parse(result) as [Site];
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
        this.currentSite2 = $event.attached;
        console.log(this.currentSite2.Telefonos);
        this.sitesService
          .updateSite(
            this.adminService.token,
            this.currentSite.Nombre,
            this.currentSite2.Nombre,
            this.currentSite2.Provincia,
            this.currentSite2.Canton,
            this.currentSite2.Distrito,
            this.currentSite2.Fecha_Apertura,
            this.currentSite2.Capacidad_Max,
            this.currentSite2.Horarios,
            this.currentSite2.Telefonos,
            this.currentSite2.Spa_Act,
            this.currentSite2.Tienda_Act
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
            this.sitesService
              .getSites(this.adminService.token)
              .then((response) => {
                //console.log(response.text());
                if (!response.ok) {
                  throw new Error(response.toString());
                }
                return response.text();
              })
              .then((result) => {
                this.siteOptions = JSON.parse(result) as [Site];
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

      case "deleteProduct": {
        this.boolSmokeScreen = true;
        this.boolSiteDetails = true;
        this.currentSite2 = $event.attached;
        this.sitesService
          .deleteSite(this.adminService.token, this.currentSite2.Nombre)
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw response.text();
            }
            return response.text();
          })
          .then((result) => {
            console.log(result);
            this.sitesService
              .getSites(this.adminService.token)
              .then((response) => {
                //console.log(response.text());
                if (!response.ok) {
                  throw new Error(response.toString());
                }
                return response.text();
              })
              .then((result) => {
                this.siteOptions = JSON.parse(result) as [Site];
                console.log(result);
              })
              .catch(async (err) => {
                err.then((result: any) => {
                  console.log(result);
                  this.alertService.alertError(result);
                });
              });
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

      case "showDetails": {
        this.boolSmokeScreen = true;
        this.boolSiteDetails = true;
        this.currentSite = $event.attached;
        break;
      }

      case "activateSpa": {
        this.currentSite = $event.attached;
        this.sitesService
          .changeSpaState(this.adminService.token, this.currentSite.Nombre)
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

      case "unchangedProduct": {
        this.boolSmokeScreen = false;
        this.boolNewSite = false;
        this.boolSiteDetails = false;
        break;
      }

      case "activateStore": {
        this.currentSite = $event.attached;
        this.sitesService
          .changeStoreState(this.adminService.token, this.currentSite.Nombre)
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
    }
  }

  ngOnInit(): void {
    this.sitesService
      .getSites(this.adminService.token)
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.siteOptions = JSON.parse(result) as [Site];
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
