import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTypeInstanceComponent } from './equipment-type-instance.component';

describe('EquipmentTypeInstanceComponent', () => {
  let component: EquipmentTypeInstanceComponent;
  let fixture: ComponentFixture<EquipmentTypeInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentTypeInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTypeInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
