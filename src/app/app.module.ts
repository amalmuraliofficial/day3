import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LabelComponent } from './label/label.component';
import { PoolComponent } from './pool/pool.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LabelComponent,
    PoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
