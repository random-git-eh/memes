import { TestBed } from '@angular/core/testing';

import { EchoratesService } from './echorates.service';

describe('EchoratesService', () => {
  let service: EchoratesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchoratesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
