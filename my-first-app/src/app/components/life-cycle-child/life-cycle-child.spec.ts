import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleChild } from './life-cycle-child';

describe('LifeCycleChild', () => {
  let component: LifeCycleChild;
  let fixture: ComponentFixture<LifeCycleChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCycleChild],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeCycleChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
