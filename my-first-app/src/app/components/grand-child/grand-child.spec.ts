import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChild } from './grand-child';

describe('GrandChild', () => {
  let component: GrandChild;
  let fixture: ComponentFixture<GrandChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrandChild],
    }).compileComponents();

    fixture = TestBed.createComponent(GrandChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
