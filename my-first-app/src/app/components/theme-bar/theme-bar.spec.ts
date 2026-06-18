import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBar } from './theme-bar';

describe('ThemeBar', () => {
  let component: ThemeBar;
  let fixture: ComponentFixture<ThemeBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeBar],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
