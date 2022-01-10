import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssHttpComponent } from './css-http.component';

describe('CssHttpComponent', () => {
  let component: CssHttpComponent;
  let fixture: ComponentFixture<CssHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
