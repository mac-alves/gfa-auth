import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenAdapter } from '@gfa/gfa-infra';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TokenAdapter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
