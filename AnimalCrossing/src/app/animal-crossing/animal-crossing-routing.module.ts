import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoCapturasComponent } from './components/catalogo-capturas/catalogo-capturas.component';

const routes: Routes = [
  {
    path:'catalogo',
    component:CatalogoCapturasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalCrossingRoutingModule { }
