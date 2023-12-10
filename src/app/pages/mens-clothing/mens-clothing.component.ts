import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';
import { faHouse, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mens-clothing',
  templateUrl: './mens-clothing.component.html',
  styleUrls: ['./mens-clothing.component.css'],
})
export class MensClothingComponent implements OnInit {
  products: Product[] = [];
  filteredMensProducts: Product[] = [];
  homeIcon = faHouse;
  rightIcon = faAngleRight;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filterMensProducts();
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  filterMensProducts = () => {
    this.filteredMensProducts = this.products.filter(
      (product) => product.category === "men's clothing"
    );
  };
}
