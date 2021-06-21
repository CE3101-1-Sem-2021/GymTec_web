import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BranchOffice } from 'src/app/models/branch-office';
import { EventData } from 'src/app/models/event-data';
import { Site } from 'src/app/models/site';
import { Treatment } from 'src/app/models/treatment';
import { AdminService } from 'src/app/services/admin.service';
import { BranchOfficeService } from 'src/app/services/branch-office.service';
import { TreamentService } from '../../treatments/treament.service';

@Component({
  selector: 'app-link-treatments',
  templateUrl: './link-treatments.component.html',
  styleUrls: ['./link-treatments.component.scss']
})
export class LinkTreatmentsComponent implements OnInit {
  @Input() branchOffices!: Site[];
  @Input() allTreatments!: Treatment[];
  @Output() raiseEvent = new EventEmitter<EventData>();

  boolSelectedBranch = false;
  branchNames: String[] = [];
  selectedBranch: Site = new Site();
  notLinkedValues: Treatment[] = [];
  linkedValues: Treatment[] = [];

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
    for(let elem of this.allTreatments) {
      let linked = false;
      for(let branch of elem.Sucursal) {
        if(branch.Nombre === this.selectedBranch.Nombre) {
          linked = true;
          break;
        }
      }
      if(!linked) {
        this.notLinkedValues.push(elem);
      }
    }
  }

  getLinked() {
    this.linkedValues = [];
    for(let elem of this.allTreatments) {
      let linked = false;
      for(let branch of elem.Sucursal) {
        if(branch.Nombre === this.selectedBranch.Nombre) {
          linked = true;
          break;
        }
      }
      if(linked) {
        this.linkedValues.push(elem);
      }
    }
  }

  linkTreatment(name: String) {
    for(const treatment of this.allTreatments) {
      if(treatment.Nombre == name) {
        treatment.Sucursal.push(this.selectedBranch);
        this.branchService.asignTreatment(this.adminService.token, treatment.Id, this.selectedBranch.Nombre)
        break;
      }
    }
    this.getNotLinked();
    this.getLinked();
  }

  deleteTreatment(name: String) {
    for(const treatment of this.allTreatments) {
      if(treatment.Nombre == name) {
        let position = 0;
        for(let branch of treatment.Sucursal) {
          if(branch.Nombre === this.selectedBranch.Nombre) {
            position = treatment.Sucursal.indexOf(branch);
            break;
          }
        }
        treatment.Sucursal.splice(position, 1);
        this.branchService.unsignTreatment(this.adminService.token, treatment.Id, this.selectedBranch.Nombre)
        break;
      }
    }
    this.getNotLinked();
    this.getLinked();
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
          if(branch.Nombre == $event.attached) {
            this.selectedBranch = branch;
            console.log(this.selectedBranch);
            break;
          }
        }
        this.selectBranch();
        break;
      };
    }
  }
}