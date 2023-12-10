import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductComponent } from './components/product/product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderCardComponent } from './components/slider-card/slider-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategorizedHeroComponent } from './components/categorized-hero/categorized-hero.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { HomeComponent } from './pages/home/home.component';
import { JeweleryComponent } from './pages/jewelery/jewelery.component';
import { MensClothingComponent } from './pages/mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './pages/womens-clothing/womens-clothing.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GenderHeroComponent } from './components/gender-hero/gender-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ProductComponent,
    SidebarComponent,
    SliderCardComponent,
    FooterComponent,
    CategorizedHeroComponent,
    CartItemComponent,
    HomeComponent,
    JeweleryComponent,
    MensClothingComponent,
    WomensClothingComponent,
    ProductDetailsComponent,
    GenderHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
