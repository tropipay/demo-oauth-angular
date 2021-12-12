import { TestBed } from '@angular/core/testing';

import { TropipayService } from './tropipay.service';

describe('TropipayService', () => {
  let service: TropipayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TropipayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
