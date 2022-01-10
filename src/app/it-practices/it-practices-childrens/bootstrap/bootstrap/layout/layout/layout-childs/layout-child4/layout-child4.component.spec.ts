import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChild4Component } from './layout-child4.component';

describe('LayoutChild4Component', () => {
  let component: LayoutChild4Component;
  let fixture: ComponentFixture<LayoutChild4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutChild4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutChild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
