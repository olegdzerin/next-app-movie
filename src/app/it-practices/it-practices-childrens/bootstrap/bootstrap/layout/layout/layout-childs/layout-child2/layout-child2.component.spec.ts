import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChild2Component } from './layout-child2.component';

describe('LayoutChild2Component', () => {
  let component: LayoutChild2Component;
  let fixture: ComponentFixture<LayoutChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
