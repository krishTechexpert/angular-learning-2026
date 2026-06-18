import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationBwtComponent } from './communication-bwt-component';

describe('CommunicationBwtComponent', () => {
  let component: CommunicationBwtComponent;
  let fixture: ComponentFixture<CommunicationBwtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunicationBwtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunicationBwtComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
