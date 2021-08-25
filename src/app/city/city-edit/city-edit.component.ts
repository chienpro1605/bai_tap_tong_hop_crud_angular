import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CityService} from '../../service/city.service';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {

  cityForm: FormGroup;
  id: number;

  categories: Category[] = [];

  constructor(private cityService: CityService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCity(this.id);
    });
  }

  ngOnInit() {
    this.getAll();
  }
  getCity(id: number) {
    return this.cityService.findById(id).subscribe(city => {
      this.cityForm = new FormGroup({
        name: new FormControl(city.name),
        area: new FormControl(city.area),
        population: new FormControl(city.population),
        description: new FormControl(city.description),
        gdp: new FormControl(city.gdp),
        country: new FormControl(city.country.id)
      });
    });
  }
  getAll() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }
  updateCity(id: number) {
    const city = this.cityForm.value;
    city.country = {
      id: city.country
    };
    this.cityService.updateCity(id, city).subscribe(() => {
      alert('Cập nhật thành công');
    });
  }


}
