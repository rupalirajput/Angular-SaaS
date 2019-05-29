import { TestBed } from '@angular/core/testing';

import { questionBankService } from './ques-bank.service';

describe('questionBankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: questionBankService = TestBed.get(questionBankService);
    expect(service).toBeTruthy();
  });
});
