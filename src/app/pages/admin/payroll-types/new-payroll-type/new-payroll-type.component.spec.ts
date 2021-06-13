import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPayrollTypeComponent } from './new-payroll-type.component';

describe('NewPayrollTypeComponent', () => {
  let component: NewPayrollTypeComponent;
  let fixture: ComponentFixture<NewPayrollTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPayrollTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPayrollTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
