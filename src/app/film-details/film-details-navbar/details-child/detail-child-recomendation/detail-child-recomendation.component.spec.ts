import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChildRecomendationComponent } from './detail-child-recomendation.component';

describe('DetailChildRecomendationComponent', () => {
  let component: DetailChildRecomendationComponent;
  let fixture: ComponentFixture<DetailChildRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChildRecomendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChildRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
