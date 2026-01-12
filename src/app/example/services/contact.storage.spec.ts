import { TestBed } from '@angular/core/testing';

import { ContactStorage } from './contact.storage';

describe('ContactStorage', () => {
  let service: ContactStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
