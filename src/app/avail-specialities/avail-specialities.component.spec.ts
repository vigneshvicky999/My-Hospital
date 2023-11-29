import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailSpecialitiesComponent } from './avail-specialities.component';

describe('AvailSpecialitiesComponent', () => {
  let component: AvailSpecialitiesComponent;
  let fixture: ComponentFixture<AvailSpecialitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailSpecialitiesComponent]
    });
    fixture = TestBed.createComponent(AvailSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
