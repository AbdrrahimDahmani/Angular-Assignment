import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { EffectsModule, USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { ProductsListComponent } from './products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsEffects } from './app-states/effects/products.effects';
import { StoreModule } from '@ngrx/store';
import { productsList } from './app-states/actions/products.actions';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productsReducer } from './app-states/reducer/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({productsReducer}),
    EffectsModule.forRoot([ProductsEffects])

  ],
  providers: [
    ProductsEffects,
  {
    provide: USER_PROVIDED_EFFECTS,
    multi: true,
    useValue: [ProductsEffects],
  },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
