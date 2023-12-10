import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';
import { faHouse, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css'],
})
export class JeweleryComponent {
  products: Product[] = [];
  filteredJeweleryProducts: Product[] = [];
  homeIcon = faHouse;
  rightIcon = faAngleRight;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filterJeweleryProducts();
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  filterJeweleryProducts = () => {
    this.filteredJeweleryProducts = this.products.filter(
      (product) => product.category === 'jewelery'
    );
  };
}
