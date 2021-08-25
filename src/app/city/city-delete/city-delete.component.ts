import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CityService} from "../../service/city.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-city-delete',
  templateUrl: './city-delete.component.html',
  styleUrls: ['./city-delete.component.css']
})
export class CityDeleteComponent implements OnInit {
  cityForm: FormGroup;
  id: number;

  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCity(this.id);
    });
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

  ngOnInit() {
  }
  deleteProduct(id: number) {
    this.cityService.deleteCity(id).subscribe(() => {
      this.router.navigate(['/cities/list']);
    }, e => console.log(e));
  }

}
