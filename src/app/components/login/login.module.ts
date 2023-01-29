import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RippleModule } from 'primeng/ripple';
import { SharedCoreModule } from 'projects/power-core-angular/src/app/shared-core/shared-core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    CardModule,
    ButtonModule,
    RippleModule,
    SharedCoreModule,
    SharedModule
  ]
})
export class LoginModule { }
