import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filterProducts();
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  filterProducts = () => {
    this.filteredProducts = this.products.filter((product) => {
      return (
        product.category === "men's clothing" ||
        product.category === "women's clothing" ||
        product.category === 'jewelery'
      );
    });
  };
}
