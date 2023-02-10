import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button'

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedCoreModule } from 'projects/power-core-angular/src/app/shared-core/shared-core.module';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';


@NgModule({
  declarations: [
    HomeComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component
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
