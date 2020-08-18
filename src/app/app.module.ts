import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';

import { ChromeComponent } from './chrome/chrome.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { UxComponent } from './ux/ux.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { GamedevComponent } from './gamedev/gamedev.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ConfirmPageComponent } from './contact/confirm-page/confirm-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChromeComponent,
    HomeComponent,
    UxComponent,
    FullstackComponent,
    GamedevComponent,
    AboutComponent,
    ContactComponent,
    ConfirmPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
