import { Component, OnInit, inject, signal, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  // DI ( Dependency Injection )
  #productService = inject(ProductService);

  cartDB: Product[] = [];
  cartTotal!: number;

  subTotal = signal(this.cartTotal);

  getCartTotal() {
    let total = 0;
    for (let cart of this.cartDB) {
      total += cart.price * cart.purchaseQuantity;
      this.cartTotal = total;
      this.subTotal.set(this.cartTotal);
    }
    return this.cartTotal;
  }

  removeCart(id: number) {
    for (let i = 0; i < this.cartDB.length; i++) {
      if (this.cartDB[i].id == id) {
        this.cartDB.splice(i, 1);
        this.getCartTotal();
        this.#productService.count = this.#productService.count - 1;
        this.#productService.cartCount.next(this.#productService.count);
      }
      if (this.#productService.getData()[i].id == id) {
        this.#productService.getData()[i].isInCart = false;
      }
    }
  }

  fAddQty(id: number) {
    this.#productService.changeAddQty(id);
    this.getCartTotal();
  }
  fSubQty(id: number) {
    this.#productService.changeSubQty(id);
    this.getCartTotal();
  }

  ngOnInit(): void {
    this.cartDB = this.#productService.getCartData();
    this.getCartTotal();
  }
}
