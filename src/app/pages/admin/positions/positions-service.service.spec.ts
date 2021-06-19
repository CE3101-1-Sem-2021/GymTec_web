import { TestBed } from '@angular/core/testing';

import { PositionsServiceService } from './positions-service.service';

describe('PositionsServiceService', () => {
  let service: PositionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
