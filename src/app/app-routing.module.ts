import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component/component.component';
const routes: Routes = [
  {path : "" , component: ComponentComponent },
    {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
