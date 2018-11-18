import { TestBed } from '@angular/core/testing';

import { AccuracyService } from './accuracy.service';

describe('AccuracyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccuracyService = TestBed.get(AccuracyService);
    expect(service).toBeTruthy();
  });
});
