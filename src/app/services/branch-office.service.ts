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

  async assignTreatment(token: string, treatmentID: String, siteID: String) {
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

  async unassignTreatment(token: string, treatmentID: String, siteID: String) {
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

  async assignProduct(token: string, productID: String, siteID: String) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud//api/Product/assignProduct/" + productID + '/' + siteID + '/' +
        token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async unassignProduct(token: string, productID: String, siteID: String) {
    return fetch(
      "https://gymtecrelational.conveyor.cloud//api/Product/unsignProduct/" + productID + '/' + siteID + '/' +
        token,
      {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

  async updateEquipment(token: string, equipment: Equipment, link: boolean) {
    let json;
    if(link) {
        json = JSON.stringify({
        Serial: equipment.Serial,
        Tipo_Equipo: equipment.Tipo_Equipo,
        Marca: equipment.Marca,
        Costo: equipment.Costo,
        Sucursal: equipment.Sucursal
      });
    }
    else {
        json = JSON.stringify({
        Serial: equipment.Serial,
        Tipo_Equipo: equipment.Tipo_Equipo,
        Marca: equipment.Marca,
        Costo: equipment.Costo
      });
    }
    console.log(json);
    return fetch(
      "https://gymtecrelational.conveyor.cloud//api/Maquina/updateMachine/" + equipment.Serial + '/' +
        token,
      {
        method: "PUT",
        headers: myHeaders,
        body: json,
        redirect: "follow",
        mode: "cors",
      }
    );
  }

}
