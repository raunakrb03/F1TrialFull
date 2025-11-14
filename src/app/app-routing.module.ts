import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDriversComponent } from './drivers/display-drivers/display-drivers.component';
import { AddDriversComponent } from './drivers/add-drivers/add-drivers.component';
import { UpdateDriversComponent } from './drivers/update-drivers/update-drivers.component';

const routes: Routes = [
  { path: '', redirectTo: 'display', pathMatch: 'full' },
  { path: 'display', component: DisplayDriversComponent },
  { path: 'add', component: AddDriversComponent },
  { path: 'update', component: UpdateDriversComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
