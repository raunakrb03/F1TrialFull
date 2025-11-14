import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
import { DisplayDriversComponent } from './display-drivers/display-drivers.component';
import { UpdateDriversComponent } from './update-drivers/update-drivers.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddDriversComponent,
    DisplayDriversComponent,
    UpdateDriversComponent
  ]
})
export class DriversModule { }
