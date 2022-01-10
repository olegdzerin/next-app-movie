import { TestBed } from '@angular/core/testing';

import { ItPracticesService } from './it-practices.service';

describe('ItPracticesService', () => {
  let service: ItPracticesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItPracticesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
