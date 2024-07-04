/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Restaurante_formComponent } from './restaurante_form.component';

describe('Restaurante_formComponent', () => {
  let component: Restaurante_formComponent;
  let fixture: ComponentFixture<Restaurante_formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Restaurante_formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurante_formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
