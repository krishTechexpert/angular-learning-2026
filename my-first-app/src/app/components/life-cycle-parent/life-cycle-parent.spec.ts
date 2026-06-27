import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleParent } from './life-cycle-parent';

describe('LifeCycleParent', () => {
  let component: LifeCycleParent;
  let fixture: ComponentFixture<LifeCycleParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCycleParent],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeCycleParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
