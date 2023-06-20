import {Component, OnInit} from '@angular/core';
import {Subject, debounceTime, distinctUntilChanged} from 'rxjs';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  options: any[] = [];
  searchValue = new Subject<string>();
  debounceTime = 500;
  isLoading = false;
  selectedLocationId: any;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.onSearch('Tehran');
    this.searchValue.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged())
      .subscribe(value => {
        this.onSearch(value)
      });
  }

  onSearch(search: string) {
    this.isLoading = true;
    this.weatherService.getLocations(search).subscribe((res: any) => {
      let locations: any[] = [];
      res.results.map((item: any, index: number) => {
        this.isLoading = false;
        if (item.city) {
          locations.push({
            id: index,
            coordinate: {
              lat: item.lat,
              lng: item.lon
            },
            name: `${search}: ${item.city}(${item.country})`
          })
        }
      })
      this.options = [...locations]
      this.selectedLocationId = locations[0].id;
      this.weatherService.searchedLocation.next(locations[0].coordinate);
    })
  }

  onSelect() {
    const selectedLocation = this.options.find(item => item.id === this.selectedLocationId).coordinate;
    this.weatherService.searchedLocation.next(selectedLocation);
  }
}
