import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContact } from './display-contact';

describe('DisplayContact', () => {
  let component: DisplayContact;
  let fixture: ComponentFixture<DisplayContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
