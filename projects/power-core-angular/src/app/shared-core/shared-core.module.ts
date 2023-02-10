import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InputmessagesPipe } from './pipes/inputmessages.pipe';
import { FormControlMessageComponent } from './components/form-control-message/form-control-message.component';
import { MenuGroupComponent } from './components/sidebar/menu-group/menu-group.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarHeaderComponent } from './components/sidebar/sidebar-header/sidebar-header.component';



@NgModule({
  declarations: [
    FormControlMessageComponent,
    InputmessagesPipe,
    SidebarComponent,
    MenuGroupComponent,
    SidebarHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FormControlMessageComponent,
    InputmessagesPipe,
    SidebarComponent
  ]
})
export class SharedCoreModule { }
