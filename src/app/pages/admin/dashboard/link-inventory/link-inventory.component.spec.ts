import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkInventoryComponent } from './link-inventory.component';

describe('LinkInventoryComponent', () => {
  let component: LinkInventoryComponent;
  let fixture: ComponentFixture<LinkInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
