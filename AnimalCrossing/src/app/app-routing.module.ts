import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './core/components/description/description.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [
{
  path:'',
  loadChildren:()=>import('./core/core.module').then((m)=> m.CoreModule),
},
{
  path:'animal-crossing',
  loadChildren:()=>import('./animal-crossing/animal-crossing.module').then((m)=> m.AnimalCrossingModule),
}
,
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
