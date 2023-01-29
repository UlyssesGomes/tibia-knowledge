import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { InputControlComponent } from './components/input-control/input-control.component';
import { SharedCoreModule } from 'projects/power-core-angular/src/app/shared-core/shared-core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SendButtonComponent } from './components/send-button/send-button.component';



@NgModule({
  declarations: [
    InputControlComponent,
    SendButtonComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    SharedCoreModule,
    ReactiveFormsModule
  ],
  exports: [
    InputControlComponent,
    SendButtonComponent
  ]
})
export class SharedModule { }
