import { Component, OnInit } from '@angular/core';

import { BranchOfficeService } from 'src/app/services/branch-office.service';
import { ClassService } from 'src/app/services/class.service';

import { Class } from 'src/app/models/calendar/class';
import { Equipment } from 'src/app/models/equipment';
import { EventData } from 'src/app/models/event-data';
import { Product } from 'src/app/models/product';
import { Treatment } from 'src/app/models/treatment';
import { TreamentService } from '../treatments/treament.service';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { SitesService } from '../sites/sites.service';
import { Site } from 'src/app/models/site';
import { InventoryService } from '../inventory/inventory.service';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  boolSmokeScreen = false;
  boolLinkTreatments = false;
  boolLinkInventory = false;
  boolLinkProducts = false;
  boolShowClasses = false;
  allBranches: Site[] = [];
  allTreatments: Treatment[] = [];
  allInventory: Equipment[] = [];
  allProducts: Product[] = [];
  allClasses: Class[] = [];

  constructor(private adminService: AdminService, private classService: ClassService, private treatmentService: TreamentService, private alertService: AlertService, private siteService: SitesService, private inventoryService: InventoryService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllTreatments();
    this.getAllBranches();
    this.getAllInventory();
    this.getAllProducts();
  }

  getAllTreatments() {
    this.treatmentService.getTreatment(this.adminService.token).then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response.text();
    })
    .then((result) => {
      this.allTreatments = JSON.parse(result) as [Treatment];
    })
    .catch(async (err) => {
      err.then((result: any) => {
        console.log(result);
        this.alertService.alertError(result);
      });
    });
  }

  getAllBranches() {
    this.siteService.getSites(this.adminService.token).then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response.text();
    })
    .then((result) => {
      this.allBranches = JSON.parse(result) as [Site];
    })
    .catch(async (err) => {
      err.then((result: any) => {
        console.log(result);
        this.alertService.alertError(result);
      });
    });
  }

  getAllInventory() {
    this.inventoryService.getMachines(this.adminService.token).then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response.text();
    })
    .then((result) => {
      this.allInventory = JSON.parse(result) as [Equipment];
    })
    .catch(async (err) => {
      err.then((result: any) => {
        console.log(result);
        this.alertService.alertError(result);
      });
    });
  }

  getAllProducts() {
    this.productService.getProducts(this.adminService.token).then((response) => {
      if (!response.ok) {
        throw new Error(response.toString());
      }
      return response.text();
    })
    .then((result) => {
      this.allProducts = JSON.parse(result) as [Product];
    })
    .catch(async (err) => {
      err.then((result: any) => {
        console.log(result);
        this.alertService.alertError(result);
      });
    });
  }

  showTreatments() {
    this.boolSmokeScreen = true;
    this.boolLinkTreatments = true;
  }

  showInventory() {
    this.boolSmokeScreen = true;
    this.boolLinkInventory = true;
  }

  showProducts() {
    this.boolSmokeScreen = true;
    this.boolLinkProducts = true;
  }

  showClasses() {
    this.boolSmokeScreen = true;
    this.boolShowClasses = true;
  }

  childEvent($event: EventData) {
    switch ($event.eventID) {
      // User profile
      case 'hideTreatments': {
        this.boolSmokeScreen = false;
        this.boolLinkTreatments = false;
        break;
      };
      case 'hideInventory': {
        this.boolSmokeScreen = false;
        this.boolLinkInventory = false;
        break;
      };
      case 'hideProducts': {
        this.boolSmokeScreen = false;
        this.boolLinkProducts = false;
        break;
      };
      case 'hideClasses': {
        this.boolSmokeScreen = false;
        this.boolShowClasses = false;
        break;
      };
      case 'savedChanges': {
        this.boolSmokeScreen = false;
        this.boolLinkTreatments = false;
        break;
      };
    }
  }

}
