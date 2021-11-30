import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClient,
    SharedRoutingModule
  ]
})
export class SharedModule { }
