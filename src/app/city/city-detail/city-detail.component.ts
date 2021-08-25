import { Component, OnInit } from '@angular/core';
import {City} from '../../model/city';
import {FormGroup} from '@angular/forms';
import {CityService} from '../../service/city.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city: City;
  id: number;

  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = +param.get('id');
      this.showDetail(this.id);
    });
  }


  ngOnInit() {
  }
  showDetail(id: number) {
    this.cityService.findById(id).subscribe(city => {
      this.city = city;
    });
  }
}
