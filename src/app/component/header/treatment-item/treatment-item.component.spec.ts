import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentItemComponent } from './treatment-item.component';

describe('TreatmentItemComponent', () => {
  let component: TreatmentItemComponent;
  let fixture: ComponentFixture<TreatmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
