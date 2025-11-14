import { Component } from '@angular/core';
import { DriversServiceService } from '../../drivers-service.service';
import { Drivers } from '../../drivers';

@Component({
  selector: 'app-update-drivers',
  templateUrl: './update-drivers.component.html',
  styleUrls: ['./update-drivers.component.css']
})
export class UpdateDriversComponent {
  selectedDriver: Drivers = {
    id: 0,
    name: '',
    nationality: '',
    team: '',
    points: 0
  };

  updateSuccess = false;

  constructor(private _service: DriversServiceService) {}

  updateDriver(): void {
    this.selectedDriver.id = Number(this.selectedDriver.id); // Ensure numeric ID
    this._service.updateDriver(this.selectedDriver).subscribe({
      next: (data) => {
        console.log('Driver updated:', data);
        this.updateSuccess = true;
      },
      error: (err) => {
        console.error('Update failed:', err);
        alert('Driver not found. Please check the ID.');
      }
    });
  }
}