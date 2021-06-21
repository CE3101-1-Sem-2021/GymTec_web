import { Injectable } from '@angular/core';

import { BranchOffice } from '../models/branch-office';
import { Class } from '../models/calendar/class';
import { Equipment } from '../models/equipment';
import { EquipmentType } from '../models/equipment-type';
import { Product } from '../models/product';
import { Service } from '../models/service';
import { Treatment } from '../models/treatment';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {
  // Branch offices instantiations
  //allBranches: BranchOffice[] = [];
  allBranches: BranchOffice[] = [];
  currentBranch: BranchOffice = new BranchOffice();

  // Global management
  availableTreatments: Treatment[] = [];
  availableServices: Service[] = [];
  availableEquipmentTypes: EquipmentType[] = [];
  availableInventory: Equipment[] = [];
  availableProducts: Product[] = [];

  constructor() { }

  async asignTreatment(token: string, treatmentID: String, siteID: String) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud//api/Treatment/assignTreatment/" + treatmentID + '/' + siteID + '/' +
        token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async unsignTreatment(token: string, treatmentID: String, siteID: String) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud//api/Treatment/unsignTreatment/" + treatmentID + '/' + siteID + '/' +
        token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }



}
