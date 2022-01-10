import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChild1Component } from './layout-child1.component';

describe('LayoutChild1Component', () => {
  let component: LayoutChild1Component;
  let fixture: ComponentFixture<LayoutChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
