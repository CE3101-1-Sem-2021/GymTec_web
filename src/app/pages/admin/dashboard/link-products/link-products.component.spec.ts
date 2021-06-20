import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkProductsComponent } from './link-products.component';

describe('LinkProductsComponent', () => {
  let component: LinkProductsComponent;
  let fixture: ComponentFixture<LinkProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
