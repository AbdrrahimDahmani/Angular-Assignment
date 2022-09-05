import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addProductsList,
  productsList,
} from '../app-states/actions/products.actions';
import { AppState } from '../app-states/app.state';
import { Product } from '../models/products.models';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products$ = this.store.subscribe(res=>{
    console.log(res['productsCall']['products'])
    this.dataSource=new MatTableDataSource<Product>(res['productsCall']['products']);
    if(this.matPaginator){
      this.dataSource.paginator=this.matPaginator;

  }})


  displayedColumns: string[] = ['id','name','origins','varieti','intensifier'];
  dataSource:MatTableDataSource<Product>=new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) matPaginator !:MatPaginator;
  constructor(private store: Store<{products:Product[]}>) {}
  ngOnInit(): void {
    this.store.dispatch(productsList());
    console.log(this.products$)
    }


  }

