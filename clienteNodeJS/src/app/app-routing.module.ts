import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
  path:'',
  loadChildren:()=>import('./mi-api/mi-api.module').then((m)=>m.MiApiModule)
  },
  {
    path:'**',
  redirectTo:''
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
