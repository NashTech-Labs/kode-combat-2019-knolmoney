import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisReportsPage } from './mis-reports.page';

describe('MisReportsPage', () => {
  let component: MisReportsPage;
  let fixture: ComponentFixture<MisReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisReportsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
