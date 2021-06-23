import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventData } from 'src/app/models/event-data';
import { Product } from 'src/app/models/product';
import { Site } from 'src/app/models/site';
import { AdminService } from 'src/app/services/admin.service';
import { BranchOfficeService } from 'src/app/services/branch-office.service';

@Component({
  selector: 'app-link-products',
  templateUrl: './link-products.component.html',
  styleUrls: ['./link-products.component.scss']
})
export class LinkProductsComponent implements OnInit {
  @Input() branchOffices!: Site[];
  @Input() allProducts!: Product[];
  @Output() raiseEvent = new EventEmitter<EventData>();

  boolSelectedBranch = false;
  branchNames: String[] = [];
  selectedBranch: Site = new Site();
  notLinkedValues: Product[] = [];
  linkedValues: Product[] = [];

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
    for(const product of this.allProducts) {
      let linked = false;
      for (const branch of product.Sucursals) {
        if(branch.Nombre === this.selectedBranch.Nombre) {
          linked = true;
          break;
        }
      }
      if(!linked) {
        this.notLinkedValues.push(product);
      }
    }
  }

  getLinked() {
    this.linkedValues = [];
    for(const product of this.allProducts) {
      let linked = false;
      for (const branch of product.Sucursals) {
        if(branch.Nombre === this.selectedBranch.Nombre) {
          linked = true;
          break;
        }
      }
      if(linked) {
        this.linkedValues.push(product);
      }
    }
  }

  linkProduct(name: String) {
    for(const product of this.allProducts) {
      if(product.Nombre == name) {
        product.Sucursals.push(this.selectedBranch);
        this.branchService.assignProduct(this.adminService.token, product.Codigo_Barras, this.selectedBranch.Nombre);
        break;
        //this.selectedBranch.storeProducts.push(product);
        break;
      }
    }
    this.getNotLinked();
    this.getLinked();
  }

  deleteProduct(name: String) {
    for(const product of this.allProducts) {
      if(product.Nombre == name) {
        let position = 0;
        for(let branch of product.Sucursals) {
          if(branch.Nombre === this.selectedBranch.Nombre) {
            position = product.Sucursals.indexOf(branch);
            break;
          }
        }
        product.Sucursals.splice(position, 1);
        this.branchService.unassignProduct(this.adminService.token, product.Codigo_Barras, this.selectedBranch.Nombre);
        break;
      }
    }
    this.getNotLinked();
    this.getLinked();
  }

  return() {
    this.raiseEvent.emit({
      eventID: 'hideProducts',
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
