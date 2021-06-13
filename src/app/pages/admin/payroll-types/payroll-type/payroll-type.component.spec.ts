import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTypeComponent } from './payroll-type.component';

describe('PayrollTypeComponent', () => {
  let component: PayrollTypeComponent;
  let fixture: ComponentFixture<PayrollTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
