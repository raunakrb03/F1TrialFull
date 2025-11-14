import { Component } from '@angular/core';
import { Drivers } from '../../drivers';
import { DriversServiceService } from '../../drivers-service.service';

@Component({
  selector: 'app-display-drivers',
  templateUrl: './display-drivers.component.html',
  styleUrls: ['./display-drivers.component.css']
})
export class DisplayDriversComponent {
  driverList: Drivers[]=[];
  showTable: boolean = false;
  constructor(private _service: DriversServiceService){}

  getAllDrivers():void{
    this._service.getAll().subscribe((data:Drivers[])=>{
      this.driverList=data;
      this.showTable=true;
    })
  }
  

  deleteByDriver(driver: Drivers): void {
    this._service.deleteDriver(driver.id).subscribe({
      next: () => {
        this.driverList = this.driverList.filter(d => d.id !== driver.id);
        alert("Driver Deleted");
      },
      error: (err) => {
        console.error("Delete failed", err);
        alert("Failed to delete driver");
      }
    });
  }
}

