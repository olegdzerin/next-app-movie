import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChildSidebarComponent } from './detail-child-sidebar.component';

describe('DetailChildSidebarComponent', () => {
  let component: DetailChildSidebarComponent;
  let fixture: ComponentFixture<DetailChildSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChildSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChildSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
