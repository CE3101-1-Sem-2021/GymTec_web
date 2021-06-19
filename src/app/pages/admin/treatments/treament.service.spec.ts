import { TestBed } from '@angular/core/testing';

import { TreamentService } from './treament.service';

describe('TreamentService', () => {
  let service: TreamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
