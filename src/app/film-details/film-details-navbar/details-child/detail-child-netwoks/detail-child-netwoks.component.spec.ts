import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChildNetwoksComponent } from './detail-child-netwoks.component';

describe('DetailChildNetwoksComponent', () => {
  let component: DetailChildNetwoksComponent;
  let fixture: ComponentFixture<DetailChildNetwoksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChildNetwoksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChildNetwoksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
