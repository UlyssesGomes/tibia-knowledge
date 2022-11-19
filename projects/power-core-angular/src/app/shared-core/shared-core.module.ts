import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlMessageComponent } from './components/form-control-message/form-control-message.component';
import { InputmessagesPipe } from './pipes/inputmessages.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuGroupComponent } from './components/sidebar/menu-group/menu-group.component';



@NgModule({
  declarations: [
    FormControlMessageComponent,
    InputmessagesPipe,
    SidebarComponent,
    MenuGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormControlMessageComponent,
    InputmessagesPipe,
    SidebarComponent
  ]
})
export class SharedCoreModule { }
