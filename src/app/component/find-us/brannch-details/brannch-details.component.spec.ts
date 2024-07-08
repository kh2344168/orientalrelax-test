import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrannchDetailsComponent } from './brannch-details.component';

describe('BrannchDetailsComponent', () => {
  let component: BrannchDetailsComponent;
  let fixture: ComponentFixture<BrannchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrannchDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrannchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
