import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather';
  IsChangeLocation = false;
  TodayDate: Date;
  weatherData: any;
  cityName: string = ''; 

  constructor(private service: CommonService) {
    this.TodayDate = new Date();
  }

  changeLocation() {
    this.IsChangeLocation = !this.IsChangeLocation;
  }

  getWeatherDataByCity() {
    this.service.getWeatherData(this.cityName).subscribe((data) => {
      this.weatherData = data;
    });
  }

  transform(value: number): number {
    return Math.round(value);
  }
}
