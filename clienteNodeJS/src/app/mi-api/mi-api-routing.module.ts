import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { VistaAdminComponent } from './components/vista-admin/vista-admin.component';
import { VistaUserComponent } from './components/vista-user/vista-user.component';

const routes: Routes = [
  {
    path:'',
  component:LoginComponent
},
{
  path:'admin',
component:VistaAdminComponent
},
{
  path:'user',
component:VistaUserComponent
},
{
  path:'crear',
component:CrearUserComponent
},
{
  path:'edit',
component:EditUserComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiApiRoutingModule { }
