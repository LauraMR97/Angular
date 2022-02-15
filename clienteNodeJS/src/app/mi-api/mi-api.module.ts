import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiApiRoutingModule } from './mi-api-routing.module';
import { LoginComponent } from './components/login/login.component';
import { VistaUserComponent } from './components/vista-user/vista-user.component';
import { VistaAdminComponent } from './components/vista-admin/vista-admin.component';
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    VistaUserComponent,
    VistaAdminComponent,
    CrearUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MiApiRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MiApiModule { }
