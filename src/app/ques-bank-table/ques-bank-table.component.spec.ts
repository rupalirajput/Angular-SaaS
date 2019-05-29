import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { questionBankTableComponent } from './ques-bank-table.component';

describe('questionBankTableComponent', () => {
  let component: questionBankTableComponent;
  let fixture: ComponentFixture<questionBankTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ questionBankTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(questionBankTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
