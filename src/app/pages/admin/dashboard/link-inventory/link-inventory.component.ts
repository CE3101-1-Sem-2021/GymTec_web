import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';
import { EventData } from 'src/app/models/event-data';
import { Site } from 'src/app/models/site';
import { AdminService } from 'src/app/services/admin.service';
import { BranchOfficeService } from 'src/app/services/branch-office.service';

@Component({
  selector: 'app-link-inventory',
  templateUrl: './link-inventory.component.html',
  styleUrls: ['./link-inventory.component.scss']
})
export class LinkInventoryComponent implements OnInit {
  @Input() branchOffices!: Site[];
  @Input() allInventory!: Equipment[];
  @Output() raiseEvent = new EventEmitter<EventData>();

  boolSelectedBranch = false;
  branchNames: String[] = [];
  selectedBranch: Site = new Site();
  notLinkedValues: Equipment[] = [];
  linkedValues: Equipment[] = [];

  constructor(private branchService: BranchOfficeService, private adminService: AdminService) { }

  ngOnInit(): void {
    for(const branch of this.branchOffices) {
      this.branchNames.push(branch.Nombre);
    }
  }

  selectBranch() {
    this.boolSelectedBranch = true;
    this.getNotLinked();
    this.getLinked();
  }

  getNotLinked() {
    this.notLinkedValues = [];
    for(const equipment of this.allInventory) {
      if((equipment.Sucursal == "") || (equipment.Sucursal == null)) {
        this.notLinkedValues.push(equipment);
      }
    }
  }
  
  getLinked() {
    this.linkedValues = [];
    for(const equipment of this.allInventory) {
      if(equipment.Sucursal == this.selectedBranch.Nombre) {
        this.linkedValues.push(equipment);
      }
    }
  }

  linkInventory(serial: String) {
    for(const equipment of this.allInventory) {
      if(equipment.Serial == serial) {
        equipment.Sucursal = this.selectedBranch.Nombre;
        this.branchService.updateEquipment(this.adminService.token, equipment, true);
        break;
      }
    }
    this.getNotLinked();
    this.getLinked();
  }

  deleteInventory(serial: String) {
    for(const equipment of this.allInventory) {
      if(equipment.Serial == serial) {
        equipment.Sucursal = "";
        this.branchService.updateEquipment(this.adminService.token, equipment, false);
        break;
      }
    }
    this.getNotLinked();
    this.getLinked();
  }

  return() {
    this.raiseEvent.emit({
      eventID: 'hideInventory',
      attached: null
    })
  }

  saveChanges() {
    this.raiseEvent.emit({
      eventID: 'savedChanges',
      attached: this.selectBranch
    })
  }

  clickEvent($event: EventData) {
    switch ($event.eventID) {
      case 'Sucursal': {
        this.linkedValues = [];
        this.notLinkedValues = [];
        for(const branch of this.branchOffices) {
          if(branch.Nombre == $event.attached) {
            this.selectedBranch = branch;
            break;
          }
        }
        this.selectBranch();
        break;
      };
    }
  }
}
