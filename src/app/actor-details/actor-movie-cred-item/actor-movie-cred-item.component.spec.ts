import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorMovieCredItemComponent } from './actor-movie-cred-item.component';

describe('ActorMovieCredItemComponent', () => {
  let component: ActorMovieCredItemComponent;
  let fixture: ComponentFixture<ActorMovieCredItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorMovieCredItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorMovieCredItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
