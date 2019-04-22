import { TestBed } from '@angular/core/testing';

import { TargetsService } from './targets.service';

describe('TargetsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetsService = TestBed.get(TargetsService);
    expect(service).toBeTruthy();
  });
});
