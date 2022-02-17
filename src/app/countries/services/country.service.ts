import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/countries.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2'

  get httpParams (){
    return new HttpParams()
    .set('fields','name,capital,alpha2code,flag,population')
  }

  constructor( private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        catchError( err => of([]))
      )

  }

  searchCapital(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        catchError( err => of([]))
      )

  }

  getCountryByAlpha(id: string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  searchRegion(region: string): Observable<Country[]>{

    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      )
  }





}
