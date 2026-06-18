import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForIfDemo } from './for-if-demo';

describe('ForIfDemo', () => {
  let component: ForIfDemo;
  let fixture: ComponentFixture<ForIfDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForIfDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ForIfDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
