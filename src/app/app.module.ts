import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Module1Component } from './module-1/module-1.component';
import { Module2Component } from './module-2/module-2.component';

@NgModule({
  declarations: [AppComponent, Module1Component, Module2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
