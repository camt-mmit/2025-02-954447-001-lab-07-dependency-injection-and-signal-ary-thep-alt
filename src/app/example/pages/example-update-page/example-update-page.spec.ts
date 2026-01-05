import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUpdatePage } from './example-update-page';

describe('ExampleUpdatePage', () => {
  let component: ExampleUpdatePage;
  let fixture: ComponentFixture<ExampleUpdatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleUpdatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleUpdatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
