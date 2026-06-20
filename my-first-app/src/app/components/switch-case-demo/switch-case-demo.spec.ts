import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseDemo } from './switch-case-demo';

describe('SwitchCaseDemo', () => {
  let component: SwitchCaseDemo;
  let fixture: ComponentFixture<SwitchCaseDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchCaseDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchCaseDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
