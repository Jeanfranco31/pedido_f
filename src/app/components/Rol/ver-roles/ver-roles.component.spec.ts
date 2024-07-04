/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerRolesComponent } from './ver-roles.component';

describe('VerRolesComponent', () => {
  let component: VerRolesComponent;
  let fixture: ComponentFixture<VerRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
