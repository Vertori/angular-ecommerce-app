import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';
import { faHouse, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-womens-clothing',
  templateUrl: './womens-clothing.component.html',
  styleUrls: ['./womens-clothing.component.css'],
})
export class WomensClothingComponent {
  products: Product[] = [];
  filteredWomensProducts: Product[] = [];
  homeIcon = faHouse;
  rightIcon = faAngleRight;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filterWomensProducts();
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  filterWomensProducts = () => {
    this.filteredWomensProducts = this.products.filter(
      (product) => product.category === "women's clothing"
    );
  };
}
