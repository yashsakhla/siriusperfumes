import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = {
    name: 'Product Name',
    image: 'assets/product-image.jpg',
    weights: ['500g', '1kg', '2kg'],
    price: 20.00
  };

  selectedWeight: string = this.product.weights[0];

  addToCart() {
    console.log(`${this.product.name} with ${this.selectedWeight} added to cart.`);
  }
}
