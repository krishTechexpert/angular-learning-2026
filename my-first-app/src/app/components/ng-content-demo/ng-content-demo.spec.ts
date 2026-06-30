import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentDemo } from './ng-content-demo';

describe('NgContentDemo', () => {
  let component: NgContentDemo;
  let fixture: ComponentFixture<NgContentDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgContentDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(NgContentDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
