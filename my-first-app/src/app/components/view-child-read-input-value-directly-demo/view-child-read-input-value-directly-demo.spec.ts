import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildReadInputValueDirectlyDemo } from './view-child-read-input-value-directly-demo';

describe('ViewChildReadInputValueDirectlyDemo', () => {
  let component: ViewChildReadInputValueDirectlyDemo;
  let fixture: ComponentFixture<ViewChildReadInputValueDirectlyDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChildReadInputValueDirectlyDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChildReadInputValueDirectlyDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
