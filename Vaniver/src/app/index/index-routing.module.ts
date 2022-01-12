import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaniverComponent } from './components/vaniver/vaniver.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import {RegistroComponent } from './components/registro/registro.component';
import {QuienComponent } from './components/quien/quien.component';
import {TrabajoComponent } from './components/trabajo/trabajo.component';
import {ComprasComponent } from './components/compras/compras.component';
import { ProducuctoComponent } from './components/producucto/producucto.component';



const routes: Routes = [
  {
    path:'',
    component:VaniverComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'trabajo',
    component:TrabajoComponent
  },
  {
    path:'quienesSomos',
    component:QuienComponent
  },
  {
    path:'compras',
    component:ComprasComponent
  },
  {
    path:'producto',
    component:ProducuctoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
