import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingDemo } from './error-handling-demo';

describe('ErrorHandlingDemo', () => {
  let component: ErrorHandlingDemo;
  let fixture: ComponentFixture<ErrorHandlingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorHandlingDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
