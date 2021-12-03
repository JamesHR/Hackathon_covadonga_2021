import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenciesFormComponent } from './emergencies-form.component';

describe('EmergenciesFormComponent', () => {
  let component: EmergenciesFormComponent;
  let fixture: ComponentFixture<EmergenciesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergenciesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergenciesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
