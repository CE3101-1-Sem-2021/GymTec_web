import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BranchOffice } from 'src/app/models/branch-office';
import { EventData } from 'src/app/models/event-data';
import { Treatment } from 'src/app/models/treatment';

@Component({
  selector: 'app-link-treatments',
  templateUrl: './link-treatments.component.html',
  styleUrls: ['./link-treatments.component.scss']
})
export class LinkTreatmentsComponent implements OnInit {
  @Input() branchOffices!: BranchOffice[];
  @Input() allTreatments!: Treatment[];
  @Output() raiseEvent = new EventEmitter<EventData>();

  boolSelectedBranch = false;
  branchNames: String[] = [];
  selectedBranch: BranchOffice = new BranchOffice();
  notLinkedValues: Treatment[] = [];

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
    for(const treatment of this.allTreatments) {
      let included = false;
      for(const element of this.selectedBranch.spaTreatments) {
        if(treatment.name == element.name) {
          included = true;
          break;
        }
      }
      if(!included) {
        this.notLinkedValues.push(treatment);
      }
    }
  }

  linkTreatment(name: String) {
    for(const treatment of this.allTreatments) {
      if(treatment.name == name) {
        this.selectedBranch.spaTreatments.push(treatment);
        break;
      }
    }
    this.getNotLinked();
  }

  deleteTreatment(name: String) {
    for(const treatment of this.allTreatments) {
      if(treatment.name == name) {
        const position = this.selectedBranch.spaTreatments.indexOf(treatment);
        this.selectedBranch.spaTreatments.splice(position, 1);
        this.notLinkedValues.push(treatment);
        break;
      }
    }
  }

  return() {
    this.raiseEvent.emit({
      eventID: 'hideTreatments',
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