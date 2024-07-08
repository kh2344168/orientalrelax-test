import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsoluteMassageComponent } from './absolute-massage.component';

describe('AbsoluteMassageComponent', () => {
  let component: AbsoluteMassageComponent;
  let fixture: ComponentFixture<AbsoluteMassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsoluteMassageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsoluteMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
