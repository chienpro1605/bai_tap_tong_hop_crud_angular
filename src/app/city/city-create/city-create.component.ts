import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {City} from '../../model/city';
import {CityService} from '../../service/city.service';
import {CategoryService} from '../../service/category.service';
import {Category} from "../../model/category";

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  cityForm: FormGroup = new FormGroup({
    name: new FormControl(),
    area: new FormControl(),
    population: new FormControl(),
    description: new FormControl(),
    gdp: new FormControl(),
    country: new FormControl()
  });
  categories: Category[] = [];
  cities: City[] = [];

  constructor(private cityService: CityService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }
  submit() {
    const city = this.cityForm.value;
    city.country = {
      id: city.country
    };
    this.cityService.saveCity(city).subscribe(() => {
      alert('Tạo thành công');
      this.cityForm.reset();
    }, e => console.log(e));
  }

}
