import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css'],
})
export class QuantityComponent {
  @Input() availableQuantity!: number;
  @Input() purchaseQuantity!: number;

  @Output() addClick = new EventEmitter();
  @Output() subClick = new EventEmitter();

  add(): void {
    this.addClick.emit();
  }

  sub(): void {
    this.subClick.emit();
  }

  // add(): void {
  //   if (this.purchaseQuantity < this.availableQuantity) {
  //     this.purchaseQuantity += 1;
  //   }
  // }

  // sub(): void {
  //   if (this.purchaseQuantity > 1) {
  //     this.purchaseQuantity -= 1;
  //   }
  // }
}
