import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { products } from '../../product-data';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import { FadeInOnScrollDirective } from '../../directive/fade-in-on-scroll-directive.directive';

@Component({
  selector: 'app-products-cat',
  standalone: true,
  imports: [CommonModule, MatIconModule, ProductCardComponent, FadeInOnScrollDirective],
  templateUrl: './products-cat.component.html',
  styleUrl: './products-cat.component.css'
})
export class ProductsCatComponent {
  
  constructor(private router:Router){

  }
  
  products = products;

  backRoute(){
    this.router.navigate(['siriushome'])
  }
}
