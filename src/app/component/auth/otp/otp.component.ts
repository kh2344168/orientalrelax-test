import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit, AfterViewInit {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  formControlNames: string[] = [];
  countdownSeconds: number = 60;
  countdownInterval: any;
  otpForm: FormGroup;

  constructor() {
    this.otpForm = new FormGroup({
      firstNum: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
      secondNum: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
      thirdNum: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
      fourthNum: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
    });
  }

  ngOnInit(): void {
    this.setFormControlNames();
    this.startCountdown();
  }

  ngAfterViewInit() {}

  setFormControlNames() {
    this.formControlNames = ["firstNum", "secondNum", "thirdNum", "fourthNum"];
  }

  truncateOneDigit(item: string) {
    const controlName = this.capitalizeFirstLetter(item);
    const control = this.otpForm.get(controlName);
    if (control && control.value && control.value.length > 1) {
      control.setValue(control.value.slice(0, 1));
    }
  }

  capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  startCountdown() {
    this.countdownSeconds = 60;
    this.countdownInterval = setInterval(() => {
      if (this.countdownSeconds > 0) {
        this.countdownSeconds--;
      } else {
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }

  onResend() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    this.startCountdown();
  }

  onOtpInputChange(event: KeyboardEvent, item: string): void {
    const inputIndex = this.otpInputsArray.findIndex((input) => input.nativeElement.id === item);

    if (event.code === 'ArrowRight') {
      this.goToNextOTPInput(inputIndex);
      return;
    } else if (event.code === 'ArrowLeft') {
      this.goToPreviousOTPInput(inputIndex);
      return;
    }

    if (['Backspace', 'Delete'].includes(event.code)) {
      this.setOTPInputValue(inputIndex, '');
      this.goToPreviousOTPInput(inputIndex);
    }

    const availableCodes: string[] = Array.from({ length: 10 }, (_, i) => `${i}`);
    if (availableCodes.includes(event.key)) {
      this.setOTPInputValue(inputIndex, event.key);
      this.goToNextOTPInput(inputIndex);
    } else {
      this.setOTPInputValue(inputIndex, '');
    }
  }

  private get otpInputsArray(): ElementRef[] {
    return this.otpInputs.toArray();
  }

  private goToNextOTPInput(index: number): void {
    if (index >= 0 && index < this.otpInputsArray.length - 1) {
      this.focusOTPInput(index + 1);
    }
  }

  private goToPreviousOTPInput(index: number): void {
    if (index > 0 && index < this.otpInputsArray.length) {
      this.focusOTPInput(index - 1);
    }
  }

  private setOTPInputValue(index: number, value: string): void {
    this.otpInputsArray[index].nativeElement.value = value;
  }

  private focusOTPInput(index: number): void {
    this.otpInputsArray[index].nativeElement.focus();
  }
}
