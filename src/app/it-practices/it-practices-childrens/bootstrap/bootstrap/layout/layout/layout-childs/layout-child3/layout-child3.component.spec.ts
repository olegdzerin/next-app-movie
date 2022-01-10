import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChild3Component } from './layout-child3.component';

describe('LayoutChild3Component', () => {
  let component: LayoutChild3Component;
  let fixture: ComponentFixture<LayoutChild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutChild3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
