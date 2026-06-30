import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenDemo } from './view-children-demo';

describe('ViewChildrenDemo', () => {
  let component: ViewChildrenDemo;
  let fixture: ComponentFixture<ViewChildrenDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChildrenDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChildrenDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
