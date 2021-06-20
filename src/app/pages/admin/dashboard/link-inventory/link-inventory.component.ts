import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BranchOffice } from 'src/app/models/branch-office';
import { Equipment } from 'src/app/models/equipment';
import { EventData } from 'src/app/models/event-data';

@Component({
  selector: 'app-link-inventory',
  templateUrl: './link-inventory.component.html',
  styleUrls: ['./link-inventory.component.scss']
})
export class LinkInventoryComponent implements OnInit {
  @Input() branchOffices!: BranchOffice[];
  @Input() allInventory!: Equipment[];
  @Output() raiseEvent = new EventEmitter<EventData>();

  boolSelectedBranch = false;
  branchNames: String[] = [];
  selectedBranch: BranchOffice = new BranchOffice();
  notLinkedValues: Equipment[] = [];

  constructor() { }

  ngOnInit(): void {
    for(const branch of this.branchOffices) {
      this.branchNames.push(branch.name);
    }
  }

  selectBranch() {
    this.boolSelectedBranch = true;
    this.getNotLinked();
  }

  getNotLinked() {
    this.notLinkedValues = [];
    for(const equipment of this.allInventory) {
      let included = false;
      for(const element of this.selectedBranch.inventory) {
        if(equipment.Serial == element.Serial) {
          included = true;
          break;
        }
      }
      if(!included) {
        this.notLinkedValues.push(equipment);
      }
    }
  }

  linkInventory(serial: String) {
    for(const equipment of this.allInventory) {
      if(equipment.Serial == serial) {
        this.selectedBranch.inventory.push(equipment);
        break;
      }
    }
    this.getNotLinked();
  }

  deleteInventory(serial: String) {
    for(const equipment of this.allInventory) {
      if(equipment.Serial == serial) {
        const position = this.selectedBranch.inventory.indexOf(equipment);
        this.selectedBranch.inventory.splice(position, 1);
        this.notLinkedValues.push(equipment);
        break;
      }
    }
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
        for(const branch of this.branchOffices) {
          if(branch.name == $event.attached) {
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
