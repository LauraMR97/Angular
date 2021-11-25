import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AnimalCrossingRoutingModule } from './animal-crossing-routing.module';
import { CatalogoCapturasComponent } from './components/catalogo-capturas/catalogo-capturas.component';


@NgModule({
  declarations: [

    CatalogoCapturasComponent
  ],
  imports: [
    SharedModule,
    AnimalCrossingRoutingModule
  ]
})
export class AnimalCrossingModule { }
