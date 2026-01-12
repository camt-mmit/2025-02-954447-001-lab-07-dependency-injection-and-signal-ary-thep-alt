import { TestBed } from '@angular/core/testing';

import { SectionStorage } from './section.storage';

describe('SectionStorage', () => {
  let service: SectionStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
