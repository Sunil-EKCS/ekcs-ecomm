import { Component, Input, inject, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  #router = inject(Router);
  // #productService = inject(ProductService);

  @Input() cartData!: Product;
  @Output() deleteCartItem = new EventEmitter();
  @Output() setAddQty = new EventEmitter();
  @Output() setSubQty = new EventEmitter();

  shopBtn() {
    this.#router.navigate(['/']);
  }
  removeCart() {
    this.deleteCartItem.emit(this.cartData.id);
  }
  addQty() {
    this.setAddQty.emit(this.cartData.id);
  }
  subQty() {
    this.setSubQty.emit(this.cartData.id);
  }
}
