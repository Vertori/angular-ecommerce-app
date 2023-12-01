import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product | null =   null;

  constructor(private cartService: CartService){}

  addToCart(product: Product, id: number){
    this.cartService.addToCart(product, id)
  }
}
