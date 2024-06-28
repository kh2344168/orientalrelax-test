import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  otp: string = '';
  countdown: number = 59;
  timer: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
      'font-size': '24px',
    }
  };

  ngOnInit() {
    this.startTimer();
  }

  handleOtpChange(otp: string) {
    this.otp = otp;
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  resendCode() {
    this.countdown = 59;
    this.startTimer();
    // منطق إعادة إرسال OTP
  }

  signUp() {
    // منطق التحقق من OTP والتسجيل
    alert(`تم إدخال OTP: ${this.otp}`);
  }
  
}
