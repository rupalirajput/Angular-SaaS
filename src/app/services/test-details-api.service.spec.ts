import { TestBed } from '@angular/core/testing';

import { TestDetailsService } from './test-details-api.service';

describe('TestDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestDetailsService = TestBed.get(TestDetailsService);
    expect(service).toBeTruthy();
  });
});
