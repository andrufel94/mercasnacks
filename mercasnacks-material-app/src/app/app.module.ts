import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
// Import Angular Material
import { MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatSidenavModule,
  MatCardModule,
  MatBadgeModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule
 } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreComponent } from './components/store/store.component'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    // Material
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    // Angular Flex Layout
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
