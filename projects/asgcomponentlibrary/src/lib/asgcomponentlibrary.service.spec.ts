import { TestBed } from '@angular/core/testing';

import { AsgcomponentlibraryService } from './asgcomponentlibrary.service';

describe('AsgcomponentlibraryService', () => {
  let service: AsgcomponentlibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsgcomponentlibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
