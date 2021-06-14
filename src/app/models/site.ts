import { SitePhoneNumber } from "./site-phoneNumber";
import { SiteSchedule } from "./site-schedule";

export class Site {
  name = "";
  province = "";
  canton = "";
  district = "";
  openingDate = "";
  schedule = [new SiteSchedule()];
  managerID = "";
  capacity = 0;
  phoneNumber = [new SitePhoneNumber()];
  boolSpa = false;
  boolStore = false;
  imageURL = "";
}
