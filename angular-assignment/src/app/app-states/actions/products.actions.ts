import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/products.models';

export const productsList = createAction('[Products Page] Load Products');
export const addProductsList = createAction(
  '[Add Products List] Add Products To List',
  props<{ products: Array<Product> }>()
);
