import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = 'ola bbto'
  errorFound: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( term: string ){
    this.errorFound = false;
    this.term = term;

    this.countryService.searchCountry(this.term)
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

  suggestions(term: string){
    this.errorFound = false;

    this.countryService.searchCountry(term)
      .subscribe(countries =>
          this.suggestedCountries = countries.splice(0,5)
    )

  }
}


