import { Position } from "./position";

export class Employee {
    ID = '';
    name = '';
    lastNames = '';
    province = '';
    canton = '';
    district = '';
    position: Position = new Position();
    site = '';
    payrollType = '';
    salary = 0;
    email = '';
    password = '';
}