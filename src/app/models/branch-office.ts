import { Treatment } from './treatment';
import { Employee } from './employee';
import { Service } from './service';
import { Product } from './product';
import { Equipment } from './equipment';
import { Class } from './calendar/class';

export class BranchOffice {
    name = '';
    province = '';
    canton = '';
    district = '';
    openingDate = '';
    schedule: String[] = [];
    managerID = '';
    capacity = 0;
    phoneNumber = '';
    boolSpa = false;
    boolStore = false;

    spaTreatments: Treatment[] = [];
    spaServices: Service[] = [];
    storeProducts: Product[] = [];
    inventory: Equipment[] = [];
    classes: Class[] = [];
}