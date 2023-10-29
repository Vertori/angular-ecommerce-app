import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { WomensClothingComponent } from './pages/womens-clothing/womens-clothing.component';
import { MensClothingComponent } from './pages/mens-clothing/mens-clothing.component';
import { JeweleryComponent } from './pages/jewelery/jewelery.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "product/:id",
    component: ProductDetailsComponent,
  },
  {
    path: "women",
    component: WomensClothingComponent,
  },
  {
    path: "men",
    component: MensClothingComponent,
  },
  {
    path: "jewelery",
    component: JeweleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
