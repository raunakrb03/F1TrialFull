import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Drivers} from "./drivers";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversServiceService {

  private apiUrl = 'http://localhost:8080/api/f1/';

  constructor(private _http:HttpClient) { }

  getDriverById(id: number): Observable<Drivers> {
    return this._http.get<Drivers>(`${this.apiUrl}getById/${id}`);
  }
  
  
  getAll(){
    return this._http.get<Drivers[]>(`${this.apiUrl}getAll`);
  }
  deleteDriver(id:number){
    return this._http.delete<void>(`${this.apiUrl}deleteById/${id}`)
  }
  addDriver(driver: Drivers): Observable<Drivers> {
    return this._http.post<Drivers>(`${this.apiUrl}add`, driver);
  }
  
  updateDriver(driver: Drivers) {
    return this._http.put<Drivers>(`${this.apiUrl}update`, driver);
  }
  

  
}
