import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByDemo } from './track-by-demo';

describe('TrackByDemo', () => {
  let component: TrackByDemo;
  let fixture: ComponentFixture<TrackByDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackByDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackByDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
