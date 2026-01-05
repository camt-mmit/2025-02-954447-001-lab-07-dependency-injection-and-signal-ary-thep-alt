import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDisplayPage } from './example-display-page';

describe('ExampleDisplayPage', () => {
  let component: ExampleDisplayPage;
  let fixture: ComponentFixture<ExampleDisplayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleDisplayPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDisplayPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
