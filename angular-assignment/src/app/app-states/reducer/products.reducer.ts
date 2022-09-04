import { createReducer, INITIAL_STATE, on } from '@ngrx/store';
import { addProductsList } from '../actions/products.actions';
import { Product } from 'src/app/models/products.models';

export interface State {
  products: Product[]
}

const initialState: State = {
  products: []
}
export const productsReducer = createReducer(
  initialState,
  on(addProductsList, (state, action) => {
    return {
      state,
      products:action.products
    }
  })
);
