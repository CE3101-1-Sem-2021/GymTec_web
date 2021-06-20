import { Component, OnInit } from '@angular/core';

import { BranchOfficeService } from 'src/app/services/branch-office.service';
import { ClassService } from 'src/app/services/class.service';

import { BranchOffice } from 'src/app/models/branch-office';
import { Class } from 'src/app/models/class';
import { Equipment } from 'src/app/models/equipment';
import { EventData } from 'src/app/models/event-data';
import { Product } from 'src/app/models/product';
import { Treatment } from 'src/app/models/treatment';

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
  allBranches: BranchOffice[] = [];
  allTreatments: Treatment[] = [];
  allInventory: Equipment[] = [];
  allProducts: Product[] = [];
  allClasses: Class[] = [];

  constructor(private branchService: BranchOfficeService, private classService: ClassService) { }

  ngOnInit(): void {
    this.allBranches = this.branchService.allBranches;
    this.allTreatments = this.branchService.availableTreatments;
    this.allInventory = this.branchService.availableInventory;
    this.allClasses = this.classService.allClasses;
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

  updateBranchOffice(branch: BranchOffice) {
    console.log('Actualizar sucursal en DB');
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
        this.updateBranchOffice($event.attached);
        break;
      };
    }
  }

}
