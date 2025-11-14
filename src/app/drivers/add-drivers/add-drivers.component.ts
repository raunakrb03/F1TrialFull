import { Component } from '@angular/core';
import { DriversServiceService } from '../../drivers-service.service';
import { Drivers } from '../../drivers';

@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.css']
})export class AddDriversComponent {
  driver: Drivers = {
    id: 0,
    name: '',
    nationality: '',
    team: '',
    points: 0
  };

  allDrivers: Drivers[] = [];
  filteredDrivers: Drivers[] = [];
  showTable = false;
  searchTerm = '';
  submitted = false;

  constructor(private _service: DriversServiceService) {}

  loadDrivers(): void {
    this._service.getAll().subscribe({
      next: (data: Drivers[]) => {
        this.allDrivers = data;
        this.filteredDrivers = data;
        this.showTable = true;
      },

    });
  }

  filterTable(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredDrivers = this.allDrivers.filter(driver =>
      driver.id.toString().includes(term) ||
      driver.name.toLowerCase().includes(term) ||
      driver.nationality.toLowerCase().includes(term) ||
      driver.team.toLowerCase().includes(term) ||
      driver.points.toString().includes(term)
    );
  }

  onSubmit(): void {
    this._service.addDriver(this.driver).subscribe({
      next: (data: Drivers) => {
        this.submitted = true;
        this.driver = { id: 0, name: '', nationality: '', team: '', points: 0 };
      },

    });
  }
}