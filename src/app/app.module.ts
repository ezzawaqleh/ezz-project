import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './about/me/me.component';
import { GuardService } from './guard.service';
import { ApiDataComponent } from './api-data/api-data.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MeComponent,
    ApiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
