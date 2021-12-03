import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsFormComponent } from './visits-form.component';

describe('VisitsFormComponent', () => {
  let component: VisitsFormComponent;
  let fixture: ComponentFixture<VisitsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
