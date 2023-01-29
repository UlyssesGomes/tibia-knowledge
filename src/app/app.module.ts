import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    ButtonModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
