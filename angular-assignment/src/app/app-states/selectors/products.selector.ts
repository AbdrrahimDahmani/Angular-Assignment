
import { AppState } from "../app.state";
import { createFeatureSelector } from "@ngrx/store";
import { Product } from "src/app/models/products.models";
import { createSelector } from "@ngrx/store";

export const whateverFeatureSelector = createFeatureSelector<Product>('productsCall');
export const getProducts = createSelector(
  whateverFeatureSelector,
  (state) => state
);
