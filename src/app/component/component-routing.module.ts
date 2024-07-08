import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component.component';
import { HomeComponent } from './home/home.component';
// auth
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { OtpComponent } from './auth/otp/otp.component';
const routes: Routes = [
  { path: '', component: ComponentComponent, children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'auth', component: AuthComponent, children: [
          { path: 'login', component: LoginComponent },
          { path: 'sing-up', component: SingUpComponent },
          { path: 'otp', component: OtpComponent },
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
