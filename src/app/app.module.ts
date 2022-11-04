import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartProductComponent } from './shopping-cart-product/shopping-cart-product.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent },
      { path: 'products/tree', redirectTo: '/products', pathMatch: 'prefix' },
      { path: 'products/house', redirectTo: '/products', pathMatch: 'prefix' },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'about', component: AboutUsComponent },
      { path: '', redirectTo: '/about', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ProductComponent,
    ShoppingCartProductComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
