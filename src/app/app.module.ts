import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Banner2Component } from './header/banner2/banner2.component';
import { Banner1Component } from './header/banner1/banner1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Banner2Component,
    Banner1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
