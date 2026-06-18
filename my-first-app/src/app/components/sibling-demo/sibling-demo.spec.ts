import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingDemo } from './sibling-demo';

describe('SiblingDemo', () => {
  let component: SiblingDemo;
  let fixture: ComponentFixture<SiblingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiblingDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(SiblingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
