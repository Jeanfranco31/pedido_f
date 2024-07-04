/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Usuario_layoutComponent } from './usuario_layout.component';

describe('Usuario_layoutComponent', () => {
  let component: Usuario_layoutComponent;
  let fixture: ComponentFixture<Usuario_layoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usuario_layoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuario_layoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
