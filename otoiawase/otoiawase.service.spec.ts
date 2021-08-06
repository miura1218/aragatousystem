import { TestBed } from '@angular/core/testing';

import { OtoiawaseService } from './otoiawase.service';

describe('OtoiawaseService', () => {
  let service: OtoiawaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtoiawaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
