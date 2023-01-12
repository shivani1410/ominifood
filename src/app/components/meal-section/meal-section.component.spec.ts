import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSectionComponent } from './meal-section.component';

describe('MealSectionComponent', () => {
  let component: MealSectionComponent;
  let fixture: ComponentFixture<MealSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
