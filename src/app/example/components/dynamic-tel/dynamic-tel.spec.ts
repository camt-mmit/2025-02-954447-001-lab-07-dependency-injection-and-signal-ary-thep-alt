import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTel } from './dynamic-tel';

describe('DynamicTel', () => {
  let component: DynamicTel;
  let fixture: ComponentFixture<DynamicTel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
