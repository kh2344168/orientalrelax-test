import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqAskComponent } from './freq-ask.component';

describe('FreqAskComponent', () => {
  let component: FreqAskComponent;
  let fixture: ComponentFixture<FreqAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreqAskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreqAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
