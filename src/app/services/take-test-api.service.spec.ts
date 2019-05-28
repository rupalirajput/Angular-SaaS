import { TestBed } from '@angular/core/testing';

import { TakeTestService } from './take-test-api.service';

describe('TakeTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TakeTestService = TestBed.get(TakeTestService);
    expect(service).toBeTruthy();
  });
});
