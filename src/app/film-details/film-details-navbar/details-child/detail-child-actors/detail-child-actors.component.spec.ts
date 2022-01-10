import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChildActorsComponent } from './detail-child-actors.component';

describe('DetailChildActorsComponent', () => {
  let component: DetailChildActorsComponent;
  let fixture: ComponentFixture<DetailChildActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChildActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChildActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
