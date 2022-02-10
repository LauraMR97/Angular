import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { VaniverComponent } from './components/vaniver/vaniver.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { QuienComponent } from './components/quien/quien.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ProducuctoComponent } from './components/producucto/producucto.component';


@NgModule({
  declarations: [
    VaniverComponent,
    LoginComponent,
    RegistroComponent,
    ContactoComponent,
    TrabajoComponent,
    QuienComponent,
    ComprasComponent,
    ProducuctoComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
