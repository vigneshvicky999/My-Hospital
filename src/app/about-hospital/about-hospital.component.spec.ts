import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHospitalComponent } from './about-hospital.component';

describe('AboutHospitalComponent', () => {
  let component: AboutHospitalComponent;
  let fixture: ComponentFixture<AboutHospitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutHospitalComponent]
    });
    fixture = TestBed.createComponent(AboutHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
