import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ComponentListComponent } from './component-list/component-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
//import { ComponentModelComponent } from './component-list/component-model/component-model.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ComponentListComponent,
    NavbarComponent,
   // ComponentModelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
