import { createReducer, on } from '@ngrx/store';
import { addProductsList } from '../actions/products.actions';
import { Product } from 'src/app/models/products.models';
import { state } from '@angular/animations';

export interface State {
  products: Product[];
}

const initialState: State = {
  products: [],
};
export const productsReducer = createReducer(
  initialState,
  on(addProductsList, (state, { products }) => ({
    ...state,
    products,
  }))
);
