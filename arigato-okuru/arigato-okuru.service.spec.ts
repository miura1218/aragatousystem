import { TestBed } from '@angular/core/testing';

import { ArigatoOkuruService } from './arigato-okuru.service';

describe('ArigatoOkuruService', () => {
  let service: ArigatoOkuruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArigatoOkuruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
