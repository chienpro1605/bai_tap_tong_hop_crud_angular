import { Component, OnInit } from '@angular/core';
import {City} from '../../model/city';
import {CityService} from '../../service/city.service';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[] = [];
  // city: City;
  name: string;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.cityService.getAll().subscribe(cities => {
      this.cities = cities;
      console.log(cities);
    });
  }
getByName(name: string) {
  // tslint:disable-next-line:triple-equals
    if (name == '') {
      this.getAll();
    }
    this.cityService.findByName(name).subscribe(data => {
      this.cities = data;
    });
}
}
