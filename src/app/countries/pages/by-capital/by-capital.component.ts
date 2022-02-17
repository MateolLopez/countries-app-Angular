import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent{

  term: string = 'ola bbto'
  errorFound: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( term: string ){
    this.errorFound = false;
    this.term = term;

    this.countryService.searchCapital(this.term)
    .subscribe({
      next: (datacountries)=>{
        console.log(datacountries);
        this.countries = datacountries;
        },
      error: (err) =>{
        console.log(err)
        this.errorFound = true;
        this.countries = [];
      }

  })
  }
}
