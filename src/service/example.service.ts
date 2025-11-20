import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thing } from '../interface/things';
import { Area } from '../interface/area';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private http: HttpClient) { }

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>('/assets/things.json');
  }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('/assets/areas.json');
  }
}
