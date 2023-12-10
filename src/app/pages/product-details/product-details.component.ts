import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  fbIcon = faFacebook;
  homeIcon = faHouse;
  rightIcon = faAngleRight;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));

      // Use the ProductsService to fetch the product by id
      this.productsService.getAllProducts().subscribe({
        next: (data) => {
          // Find the product with the matching id
          this.product = data.find((product) => product.id === productId);
        },
        error: (error) => {
          console.log(error.message);
        },
      });
    });
  }

  addToCart(product: Product, id: number) {
    this.cartService.addToCart(product, id);
  }
}
