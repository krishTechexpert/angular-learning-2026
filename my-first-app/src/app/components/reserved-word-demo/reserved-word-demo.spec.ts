import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedWordDemo } from './reserved-word-demo';

describe('ReservedWordDemo', () => {
  let component: ReservedWordDemo;
  let fixture: ComponentFixture<ReservedWordDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservedWordDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservedWordDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
