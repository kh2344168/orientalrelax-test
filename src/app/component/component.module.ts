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
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
