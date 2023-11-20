import { Component, WritableSignal, inject, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // DI
  #productService = inject(ProductService);

  // Variables
  // Signal
  // readonly count : WritableSignal<number> = this.#productService.cartCount

  // BehaviouSubject
  count: number = 0;

  ngOnInit(): void {
    this.#productService.cartCount.subscribe((value) => {
      this.count = value;
    });
  }
}
