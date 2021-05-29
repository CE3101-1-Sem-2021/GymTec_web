import { Component, OnInit } from '@angular/core';
import { CrPcdService } from 'cr-pcd';

import { EventData } from 'src/app/models/event-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  provinces: String[] = [];
  provinceID = 0;
  cantons: String[] = [];
  cantonID = 0;
  districts: String[] = [];

  name = '';
  lastNames = '';
  email = '';
  password = '';
  province = '';
  canton = '';
  district = '';

  constructor(private crPcd: CrPcdService) { }

  ngOnInit(): void {
    this.getProvinces();
  }

  getProvinces() {
    const provincesObject: any = this.crPcd.getProvinces();

    let index = 1;
    while(provincesObject[index] != undefined) {
      this.provinces.push(provincesObject[index]);
      index += 1;
    }
  }

  getcrPcdID(name: String, objList: any, multiplier: number) {
    let ID = 0;
    let index = 1*multiplier + 1;

    while(objList[index] != undefined) {
      if(objList[index] == name) {
        ID = index;
        break
      }
      index += 1;
    }
    return ID
  }

  selectedProvince($event: EventData) {
    this.cantons = [];
    this.canton = '';
    this.districts = [];
    this.district = '';
    this.province = $event.attached;
    
    const provincesObject: any = this.crPcd.getProvinces();
    this.provinceID = this.getcrPcdID($event.attached, provincesObject, 0);
    const cantonsObject: any = this.crPcd.getCantons(this.provinceID.toString());
    
    let index = this.provinceID*100 + 1;
    while(cantonsObject[index] != undefined) {
      this.cantons.push(cantonsObject[index]);
      index += 1;
    }
  }

  selectedCanton($event: EventData) {
    this.districts = [];
    this.district = '';
    this.canton = $event.attached;

    const cantonsObject: any = this.crPcd.getCantons(this.provinceID.toString());
    this.cantonID = this.getcrPcdID($event.attached, cantonsObject, 100);
    const districtsObject: any = this.crPcd.getDistricts(this.cantonID.toString());

    let index = this.cantonID*100 + 1;
    while(districtsObject[index] != undefined) {
      this.districts.push(districtsObject[index]);
      index += 1;
    }
  }

  selectedDistrict($event: EventData) {
    this.district = $event.attached;
  }

  register() {

  }
}
