import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChildMediaComponent } from './detail-child-media.component';

describe('DetailChildMediaComponent', () => {
  let component: DetailChildMediaComponent;
  let fixture: ComponentFixture<DetailChildMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChildMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChildMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
