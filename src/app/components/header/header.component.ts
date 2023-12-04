import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  itemAmount: number = 0;

  constructor(
    public sidebarService: SidebarService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.isActive = window.scrollY > 40;
    });

    this.cartService.itemAmount$.subscribe(
      (amount) => (this.itemAmount = amount)
    );
  }
}
