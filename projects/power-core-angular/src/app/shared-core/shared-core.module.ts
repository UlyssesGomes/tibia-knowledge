import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlMessageComponent } from './components/form-control-message/form-control-message.component';
import { InputmessagesPipe } from './pipes/inputmessages.pipe';



@NgModule({
  declarations: [
    FormControlMessageComponent,
    InputmessagesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormControlMessageComponent
  ]
})
export class SharedCoreModule { }
