import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDriversComponent } from './drivers/display-drivers/display-drivers.component';
import { AddDriversComponent } from './drivers/add-drivers/add-drivers.component';
import { UpdateDriversComponent } from './drivers/update-drivers/update-drivers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDriversComponent,
    AddDriversComponent,
    UpdateDriversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
