import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private _Api_Key: string = 'f956220f5c764ff09b1ca2d4cf8a1b84';
  private Current_Api_Key: string = 'LVSMWR9K45PQE8S34KPGS9YMY';
  searchedLocation = new Subject<any>();

  constructor(private httpClient: HttpClient) {
  }

  getCurrentWeather(lat: string, lng: string):any {
    return this.httpClient.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lng}?unitGroup=metric&key=${this.Current_Api_Key}&contentType=json`)
  }

  getLocations(searchParam: string) {
    return this.httpClient.get(`v1/geocode/autocomplete?text=${searchParam}&format=json&apiKey=${this._Api_Key}`)
  }
}
