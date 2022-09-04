import { Action, createAction,props } from "@ngrx/store";
import { Product } from "../../models/products.models";

export enum CourseActionType {
  ADD_ITEM = '[COURSE] Add Course',
}


export const productsList=createAction('[Products Page] Load Products');
export const addProductsList=createAction(
  '[Add Products List]',
  props<{products:Array<Product>}>()
)


