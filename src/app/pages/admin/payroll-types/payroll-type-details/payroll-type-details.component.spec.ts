import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTypeDetailsComponent } from './payroll-type-details.component';

describe('PayrollTypeDetailsComponent', () => {
  let component: PayrollTypeDetailsComponent;
  let fixture: ComponentFixture<PayrollTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollTypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
