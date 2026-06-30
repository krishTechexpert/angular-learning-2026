import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDemoWithAutoFocus } from './view-child-demo-with-auto-focus';

describe('ViewChildDemoWithAutoFocus', () => {
  let component: ViewChildDemoWithAutoFocus;
  let fixture: ComponentFixture<ViewChildDemoWithAutoFocus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChildDemoWithAutoFocus],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChildDemoWithAutoFocus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
