import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component.component';
import { LoginComponent } from './auth/login/login.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
const routes: Routes = [
  {path : "" , component: ComponentComponent },
  {path : "login" , component: LoginComponent },
  {path : "sing-up" , component: SingUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
