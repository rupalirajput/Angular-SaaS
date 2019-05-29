import { TestBed } from '@angular/core/testing';

import { TestDetailsApiService } from './test-details-api.service';

describe('TestDetailsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestDetailsApiService = TestBed.get(TestDetailsApiService);
    expect(service).toBeTruthy();
  });
});
