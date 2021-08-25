import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {City} from '../model/city';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<City[]> {
    return this.http.get<City[]>(API_URL + '/api/cities');
  }

  saveCity(city): Observable<City> {
    return this.http.post<City>(API_URL + '/api/cities', city);
  }

  findById(id: number): Observable<City> {
    return this.http.get<City>(`${API_URL}/api/cities/${id}`);
  }

  updateCity(id: number, city: City): Observable<City> {
    return this.http.put<City>(`${API_URL}/api/cities/${id}`, city);
  }

  deleteCity(id: number): Observable<City> {
    return this.http.delete<City>(`${API_URL}/api/cities/${id}`);
  }
  findByName(name: string): Observable<City> {
    return this.http.get<City>(`${API_URL}/api/cities/search/${name}`);
  }
}
