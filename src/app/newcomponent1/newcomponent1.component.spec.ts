import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcomponent1Component } from './newcomponent1.component';

describe('Newcomponent1Component', () => {
  let component: Newcomponent1Component;
  let fixture: ComponentFixture<Newcomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newcomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
