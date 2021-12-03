import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../models/menu';
import { Visits } from '../models/visits';
import { Emergencies } from '../models/emergencies';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {
  // private baseUrl: string = environment.baseUrl;
    private baseUrl: string = './assets/data/visit.json';



  constructor( private http: HttpClient) { }

  getMenu(): Observable<Menu[]>{
    return this.http.get<Menu[]>('./assets/data/menu.json')
  }

  // Visits
  // getVisits(estado: number): Observable<Visits[]>{
  //   return this.http.get<Visits[]>(`${ this.baseUrl }/api/categoria/${estado}`);
  // }
  getVisits(): Observable<Visits[]>{
    return this.http.get<Visits[]>(`./assets/data/visits.json`);
  }

  postVisit(visit: Visits): Observable<Visits>{
    return this.http.post<Visits>(`${ this.baseUrl }`, visit);
  }

  putVisit(visit: Visits): Observable<Visits>{
    return this.http.put<Visits>(`${ this.baseUrl }${visit.idVisit}`, visit);
  }
  deleteVisit(idVisit: any){
    return this.http.delete<any>(`${ this.baseUrl }${idVisit}`);
  }
  // Patients
  getPatients(): Observable<Visits[]>{
    return this.http.get<Visits[]>(`./assets/data/patients.json`);
  }

  postPatient(visit: Visits): Observable<Visits>{
    return this.http.post<Visits>(`${ this.baseUrl }`, visit);
  }

  putPatient(visit: Visits): Observable<Visits>{
    return this.http.put<Visits>(`${ this.baseUrl }${visit.idVisit}`, visit);
  }
  deletePatient(idVisit: any){
    return this.http.delete<any>(`${ this.baseUrl }${idVisit}`);
  }

  getEmergencies(): Observable<Emergencies[]>{
    return this.http.get<Emergencies[]>(`./assets/data/emergencies.json`);
  }


}
