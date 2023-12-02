import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input()
  product: Product = {} as Product;

  constructor(private cartService: CartService) {}

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }

  increaseAmount(id: number): void {
    this.cartService.increaseAmount(id);
  }

  decreaseAmount(id: number): void {
    this.cartService.decreaseAmount(id);
  }
}
