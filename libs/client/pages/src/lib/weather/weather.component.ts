import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {WeatherInterface} from "./models/weather.interface";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  todayWeather: WeatherInterface | undefined = undefined;
  isLoading = false;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.weatherService.searchedLocation.subscribe((item: { lat: string, lng: string }) => {
      this.getWeatherInfo(item.lat, item.lng)
    })
  }

  getWeatherInfo(lat: string, lng: string) {
    this.weatherService.getCurrentWeather(lat, lng).subscribe((res: { currentConditions: WeatherInterface }) => {
      this.isLoading = false;
      this.todayWeather = res.currentConditions
    })
  }
}
