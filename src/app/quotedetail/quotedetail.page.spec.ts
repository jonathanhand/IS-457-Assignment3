import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedetailPage } from './quotedetail.page';

describe('QuotedetailPage', () => {
  let component: QuotedetailPage;
  let fixture: ComponentFixture<QuotedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotedetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
