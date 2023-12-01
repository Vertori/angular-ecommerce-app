import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  cart: Product[] = [];

  constructor(public sidebarService: SidebarService, private cartService: CartService) {}

  ngOnInit(): void {
   this.cartService.getCart().subscribe((cart) => this.cart = cart)
  }
}
