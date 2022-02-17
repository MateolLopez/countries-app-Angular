import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`

    button {
      margin-right: 5px;
    }

  `]
})
export class ByRegionComponent {

  regions: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  getClassCSS(region: string): string {
    return (region === this.activeRegion) ? 'btn btn-primary my-1': 'btn btn-outline-primary my-1';
  }

  activateRegion(region: string){


    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchRegion(region)
      .subscribe(countries => this.countries = countries)
  };

}
