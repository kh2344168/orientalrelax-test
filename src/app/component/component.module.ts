import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ComponentComponent } from './component.component';
import { AuthComponent } from './auth/auth.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeSectionsComponent } from './home/home-sections/home-sections.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { GiftCardComponent } from './home/gift-card/gift-card.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { FindUsComponent } from './find-us/find-us.component';
import { MapComponent } from './find-us/map/map.component';
import { BrannchDetailsComponent } from './find-us/brannch-details/brannch-details.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { AbsoluteMassageComponent } from './services-details/absolute-massage/absolute-massage.component';
import { TeamMemberComponent } from './services-details/team-member/team-member.component';
import { InspirationComponent } from './services-details/inspiration/inspiration.component';
import { TreatmentItemComponent } from './header/treatment-item/treatment-item.component';
import { AboutItemComponent } from './header/about-item/about-item.component';
import { TreatmentSectionComponent } from './treatment/treatment-section/treatment-section.component';
import { RelaxationComponent } from './treatment/relaxation/relaxation.component';
import { FreqAskComponent } from './treatment/freq-ask/freq-ask.component';
import { BookingComponent } from './booking/booking.component';
import { BookingStepOneComponent } from './booking/booking-step-one/booking-step-one.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './auth/otp/otp.component';


@NgModule({
  declarations: [
    ComponentComponent,
    AuthComponent,
    SingUpComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeSectionsComponent,
    LandingPageComponent,
    GiftCardComponent,
    ContactUsComponent,
    FindUsComponent,
    MapComponent,
    BrannchDetailsComponent,
    TreatmentComponent,
    ServicesDetailsComponent,
    AbsoluteMassageComponent,
    TeamMemberComponent,
    InspirationComponent,
    TreatmentItemComponent,
    AboutItemComponent,
    TreatmentSectionComponent,
    RelaxationComponent,
    FreqAskComponent,
    BookingComponent,
    BookingStepOneComponent,
    OtpComponent,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    ReactiveFormsModule

  ]
})
export class ComponentModule { }
