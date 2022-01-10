import { TestBed } from '@angular/core/testing';

import { FilmSubFnService } from './film-sub-fn.service';

describe('FilmSubFnService', () => {
  let service: FilmSubFnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmSubFnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
