import { TestBed } from '@angular/core/testing';

import { TakeTestApiService } from './take-test-api.service';

describe('TakeTestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TakeTestApiService = TestBed.get(TakeTestApiService);
    expect(service).toBeTruthy();
  });
});
