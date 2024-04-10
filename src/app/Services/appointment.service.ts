import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  apiBasePoint:string='http://localhost:8000/';//base URL of your backend API.
  constructor(private http:HttpClient) { }
  
  createNew(obj:any):Observable<any>{
     return this.http.post(this.apiBasePoint+"new-appointment",obj)
   }
 }
 