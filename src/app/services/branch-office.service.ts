import { Injectable } from '@angular/core';

import { BranchOffice } from '../models/branch-office';
import { Class } from '../models/class';
import { Equipment } from '../models/equipment';
import { EquipmentType } from '../models/equipment-type';
import { Product } from '../models/product';
import { Service } from '../models/service';
import { Treatment } from '../models/treatment';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {
  // Branch offices instantiations
  //allBranches: BranchOffice[] = [];
  allBranches: BranchOffice[] = [{name: 'Sucursal 1', province: 'Guanacaste', canton: 'Liberia', district:'distrito', openingDate: Date.now.toString(), schedule: [''], managerID: 'Manager', capacity: 5, phoneNumber: '88888888', boolSpa: false, boolStore: false, spaTreatments: [{name: 'Tratamiento 1', ID: 'id', imageURL: 'https'}], spaServices: [], storeProducts: [], inventory: [], classes: []}];
  currentBranch: BranchOffice = new BranchOffice();

  // Global management
  availableTreatments: Treatment[] = [{name: 'Tratamiento 1', ID: 'id', imageURL: 'https'}, {name: 'Tratamiento 2', ID: 'id', imageURL: 'https'}, {name: 'Tratamiento 3', ID: 'id', imageURL: 'https'}];
  availableServices: Service[] = [];
  availableEquipmentTypes: EquipmentType[] = [];
  availableInventory: Equipment[] = [{name: 'Equipo 1', type: 'Tipo 1', brand: 'Brand 1', serialNo: '000', price: 1000, site: 'Site'}, {name: 'Equipo 2', type: 'Tipo 2', brand: 'Brand 2', serialNo: '000', price: 1000, site: 'Site'}, {name: 'Equipo 3', type: 'Tipo 3', brand: 'Brand 3', serialNo: '000', price: 1000, site: 'Site'}];
  availableProducts: Product[] = [];

  constructor() { }

  setTreatments(treatments: Treatment[]) {
    this.currentBranch.spaTreatments = treatments;
    const branchPos = this.allBranches.indexOf(this.currentBranch);
    this.allBranches[branchPos] = this.currentBranch;
  }

  setServices(services: Service[]) {
    this.currentBranch.spaServices = services;
    const branchPos = this.allBranches.indexOf(this.currentBranch);
    this.allBranches[branchPos] = this.currentBranch;
  }

  setProducts(products: Product[]) {
    this.currentBranch.storeProducts = products;
    const branchPos = this.allBranches.indexOf(this.currentBranch);
    this.allBranches[branchPos] = this.currentBranch;
  }

  setInventory(equipment: Equipment[]) {
    this.currentBranch.inventory = equipment;
    const branchPos = this.allBranches.indexOf(this.currentBranch);
    this.allBranches[branchPos] = this.currentBranch;
  }
  
  setClasses(classes: Class[]) {
    this.currentBranch.classes = classes;
    const branchPos = this.allBranches.indexOf(this.currentBranch);
    this.allBranches[branchPos] = this.currentBranch;
  }
}
