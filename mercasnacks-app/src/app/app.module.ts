import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
// Components
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { StoreComponent } from './components/store/store.component';
import { ShoppingCartComponent } from './components/shoppinCart/shoppingCart.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    StoreComponent,
    ShoppingCartComponent  
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
