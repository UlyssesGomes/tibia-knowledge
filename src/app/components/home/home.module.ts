import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button'

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedCoreModule } from 'projects/power-core-angular/src/app/shared-core/shared-core.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    SharedCoreModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
