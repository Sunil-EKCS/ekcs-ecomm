import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css'],
})
export class CartFooterComponent {
  @Output() removeCartItem = new EventEmitter();

  removeClick() {
    this.removeCartItem.emit();
  }
}
