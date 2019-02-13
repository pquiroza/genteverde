import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GentePage } from './gente.page';

describe('GentePage', () => {
  let component: GentePage;
  let fixture: ComponentFixture<GentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
