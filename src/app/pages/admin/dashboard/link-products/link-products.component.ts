import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BranchOffice } from 'src/app/models/branch-office';
import { EventData } from 'src/app/models/event-data';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-link-products',
  templateUrl: './link-products.component.html',
  styleUrls: ['./link-products.component.scss']
})
export class LinkProductsComponent implements OnInit {
  @Input() branchOffices!: BranchOffice[];
  @Input() allProducts!: Product[];
  @Output() raiseEvent = new EventEmitter<EventData>();

  boolSelectedBranch = false;
  branchNames: String[] = [];
  selectedBranch: BranchOffice = new BranchOffice();
  notLinkedValues: Product[] = [];

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
    for(const product of this.allProducts) {
      let included = false;
      for(const element of this.selectedBranch.storeProducts) {
        if(product.Nombre == element.Nombre) {
          included = true;
          break;
        }
      }
      if(!included) {
        this.notLinkedValues.push(product);
      }
    }
  }

  linkProduct(Nombre: String) {
    for(const product of this.allProducts) {
      if(product.Nombre == Nombre) {
        this.selectedBranch.storeProducts.push(product);
        break;
      }
    }
    this.getNotLinked();
  }

  deleteProduct(Nombre: String) {
    for(const product of this.allProducts) {
      if(product.Nombre == Nombre) {
        const position = this.selectedBranch.storeProducts.indexOf(product);
        this.selectedBranch.storeProducts.splice(position, 1);
        this.notLinkedValues.push(product);
        break;
      }
    }
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
