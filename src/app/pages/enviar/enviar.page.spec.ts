import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarPage } from './enviar.page';

describe('EnviarPage', () => {
  let component: EnviarPage;
  let fixture: ComponentFixture<EnviarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
