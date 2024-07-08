import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-step-one',
  templateUrl: './booking-step-one.component.html',
  styleUrls: ['./booking-step-one.component.scss']
})
export class BookingStepOneComponent implements OnInit {


  ngOnInit(): void {
  }

  selectedGender: string = '';


  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      gender: [''],
      branch: ['']
    });
  }

  selectGender(gender: string) {
    this.form.get('gender')?.setValue(gender);
  }

  onSubmit() {
    console.log(this.form.value);
    // يمكنك هنا إرسال البيانات إلى الباك اند
  }
}
