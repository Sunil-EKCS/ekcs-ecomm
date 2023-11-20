import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css'],
})
export class CardFooterComponent {
  @Input() showQuantity!: boolean;
  @Input() availableQuantity!: number;
  @Input() purchaseQuantity!: number;

  @Output() cartProduct = new EventEmitter();
  @Output() addProductQty = new EventEmitter();
  @Output() subProductQty = new EventEmitter();

  addToCart() {
    this.cartProduct.emit();
  }
  addQty() {
    this.addProductQty.emit();
  }
  subQty() {
    this.subProductQty.emit();
  }
}
