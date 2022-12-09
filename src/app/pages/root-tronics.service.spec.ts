import { TestBed } from '@angular/core/testing';

import { RootTronicsService } from './root-tronics.service';

describe('RootTronicsService', () => {
  let service: RootTronicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootTronicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
