import { TestBed } from '@angular/core/testing';

import { CommanApicallService } from './comman-apicall.service';

describe('CommanApicallService', () => {
  let service: CommanApicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommanApicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
