import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/products.models';
import { Store } from '@ngrx/store';
import { addProductsList, productsList } from '../app-states/actions/products.actions';
import { AppState } from '../app-states/app.state';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products=this.store.select(productsList)
  constructor(private store: Store<Product[]>) {
   }
  ngOnInit(): void {
    this.store.dispatch(productsList());
    console.log(this.store.select(payload=>payload));

  }
  loadProductFromApi(){

  }
}

