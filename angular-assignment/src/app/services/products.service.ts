import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products.models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  public getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("https://random-data-api.com/api/coffee/random_coffee?size=50")
      .pipe(map((data)=>{
        const products:Product[]=[];
        for(let key in data){
          products.push({...data[key]});
        }
        return products;
      }));
  }
}
