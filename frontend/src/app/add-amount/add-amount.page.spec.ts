import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmountPage } from './add-amount.page';

describe('AddAmountPage', () => {
  let component: AddAmountPage;
  let fixture: ComponentFixture<AddAmountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
