import {Category} from './category';

export interface City {
  id?: number;
  name?: string;
  area?: number;
  population?: number;
  description?: number;
  gdp?: number;
  country?: Category;
}
