import { TestBed } from '@angular/core/testing';

import { PayrollTypeService } from './payroll-type.service';

describe('PayrollTypeService', () => {
  let service: PayrollTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
