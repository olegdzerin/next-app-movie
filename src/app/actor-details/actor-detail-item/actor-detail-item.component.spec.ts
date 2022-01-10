import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetailItemComponent } from './actor-detail-item.component';

describe('ActorDetailItemComponent', () => {
  let component: ActorDetailItemComponent;
  let fixture: ComponentFixture<ActorDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorDetailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
