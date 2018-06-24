import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';



import { FormsModule } from '@angular/forms';
import { CommonModule as SystemCommonModule } from '@angular/common';


import { SimpleReuseStrategy } from './SimpleReuseStrategy';
import { RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    HomeComponent,
    NewComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
