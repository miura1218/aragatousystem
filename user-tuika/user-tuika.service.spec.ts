import { TestBed } from '@angular/core/testing';

import { UserTuikaService } from './user-tuika.service';

describe('UserTuikaService', () => {
  let service: UserTuikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTuikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
