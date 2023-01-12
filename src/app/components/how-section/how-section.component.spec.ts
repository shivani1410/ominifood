import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowSectionComponent } from './how-section.component';

describe('HowSectionComponent', () => {
  let component: HowSectionComponent;
  let fixture: ComponentFixture<HowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
