import {Category} from "./category";

export interface City {
  id ?:number,
  name?: string,
  area?: number,
  population?: any,
  GDP?: any,
  description ?: string,
  category?:Category[]
}
