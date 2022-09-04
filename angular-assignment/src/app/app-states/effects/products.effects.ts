import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Product } from 'src/app/models/products.models';
import { ProductsService } from 'src/app/services/products.service';
import { addProductsList, productsList } from '../actions/products.actions';

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() =>
  this.actions$.pipe(
   ofType(productsList),
   mergeMap(() => this.productService.getAllProducts().pipe(
    map(payload => addProductsList({ products:payload })),
    catchError(error => of({ type: '[Products API] Products Loaded Error' })),
  )),
  )
  );


  constructor(
    private actions$: Actions,
    private productService:ProductsService
  ) {}
}

/*
  loadProducts$ = createEffect(() =>
  this.actions$.pipe(
   ofType(productsList),
   mergeMap(() => this.productService.getAllProducts()
     .pipe(
       map((products) => addProductsList({products:products})),
       catchError(()=>of({ type: '[Products API] Products Loaded Error' })
     ))
   )
  )
  );
*/
