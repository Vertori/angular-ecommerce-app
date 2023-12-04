import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //cart
  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  public cart$: Observable<Product[]> = this.cartSubject.asObservable();

  //itemAmount
  private itemAmountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public itemAmount$: Observable<number> = this.itemAmountSubject.asObservable()

  //total value of cart

  //  add to cart
  addToCart(product: Product, id: number): void {
    const newItem = { ...product, amount: 1 };

    // checking if item is already in cart
    const cartItem = this.cartSubject.value.find((item) => item.id === id);

    if (cartItem) {
      const newCart = this.cartSubject.value.map((item) => {
        if (item.id === id && cartItem.amount) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      this.cartSubject.next(newCart);
    } else {
      const newCart = [...this.cartSubject.value, newItem];
      this.cartSubject.next(newCart);
    }
    this.updateItemAmount();
  }

  // get cart
  getCart(): Observable<Product[]> {
    return this.cart$;
  }

  // remove from cart
  removeFromCart(id: number): void {
    const newCart = this.cartSubject.value.filter((item) => item.id !== id);
    this.cartSubject.next(newCart);
    this.updateItemAmount();
  }

  //increase amount
  increaseAmount(id: number): void {
    const cartItem = this.cartSubject.value.find((item) => item.id === id);
    if (cartItem) {
      this.addToCart(cartItem, id);
    }
    this.updateItemAmount();
  }

  // decrease amount
  decreaseAmount(id: number): void {
    const cartItem = this.cartSubject.value.find((item) => item.id === id);
    if (cartItem) {
      const newCart = this.cartSubject.value.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount ? cartItem.amount - 1 : undefined,
          };
        } else {
          return item;
        }
      });
      this.cartSubject.next(newCart);

      if (cartItem.amount && cartItem.amount < 2) {
        this.removeFromCart(id);
      }
    }
    this.updateItemAmount();
  }

  //cleart cart
  clearCart(): void {
    this.cartSubject.next([]);
    this.updateItemAmount();
  }

  //update item amount
  private updateItemAmount(): void {
    const amount = this.cartSubject.value.reduce((accumulator, currentItem) => {
      if (currentItem.amount) {
        return accumulator + currentItem.amount;
      }
      return accumulator;
    }, 0);
    this.itemAmountSubject.next(amount);
  }

  constructor() {}
}
