import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesBankTableComponent } from './ques-bank-table.component';

describe('QuesBankTableComponent', () => {
  let component: QuesBankTableComponent;
  let fixture: ComponentFixture<QuesBankTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesBankTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesBankTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
