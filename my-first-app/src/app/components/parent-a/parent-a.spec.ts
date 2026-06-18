import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentA } from './parent-a';

describe('ParentA', () => {
  let component: ParentA;
  let fixture: ComponentFixture<ParentA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentA],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
