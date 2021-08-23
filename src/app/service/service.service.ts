import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {City} from "../model/city";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API = `${environment.API}`

  constructor(private httpClient:HttpClient) {
  }

  createProduct(product:City):Observable<City>{
    return this.httpClient.post<City>(this.API+'/products',product);
  }

  getAll():Observable<City[]>{
    return this.httpClient.get<City[]>(this.API + '/cities');
  }
}
