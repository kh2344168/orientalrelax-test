import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxOtpInputModule } from 'ngx-otp-input';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOtpInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
