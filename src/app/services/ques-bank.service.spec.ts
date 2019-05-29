import { TestBed } from '@angular/core/testing';

import { QuesBankService } from './ques-bank.service';

describe('QuesBankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuesBankService = TestBed.get(QuesBankService);
    expect(service).toBeTruthy();
  });
});
