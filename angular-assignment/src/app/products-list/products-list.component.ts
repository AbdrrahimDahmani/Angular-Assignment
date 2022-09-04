import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  addProductsList,
  productsList,
} from '../app-states/actions/products.actions';
import { AppState } from '../app-states/app.state';
import { getProducts } from '../app-states/selectors/products.selector';
import { Product } from '../models/products.models';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  //I keep getting a store object having my data values
  products$ = this.store.select(getProducts);

  displayedColumns: string[] = ['id','name','origins','varieti','intensifier'];
  dataSource:MatTableDataSource<Product>=new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) matPaginator !:MatPaginator;
  constructor(private store: Store<AppState>,private service:ProductsService) {}
  ngOnInit(): void {
    this.store.dispatch(productsList());
    console.log(this.products$);

    this.service.getAllProducts().subscribe(
      res=>{
      this.dataSource=new MatTableDataSource<Product>(res);
          if(this.matPaginator){
            this.dataSource.paginator=this.matPaginator;
          }
      },
      (errorResponse)=>{
        console.log(errorResponse);
      });
    }


  }

