import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, CarouselModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @ViewChild('scrl') scrl: ElementRef | undefined;

  title = 'Top Deals';
  scrollX = 0;
  scrollEnd = false;
  cards = [
    {
      image: 'assets/product-2.webp', // Product image
      title: 'Azero Most',
      description: 'This is a brief description of the product.',
    },
    {
      image: 'assets/product-2.webp', // Product image
      title: 'Product Name 2',
      description: 'This is a brief description of the product.',
    },
    {
      image: 'assets/product-2.webp', // Product image
      title: 'Product Name 3',
      description: 'This is a brief description of the product.',
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    nav: true,
    navText: [ '<span class="material-icons">arrow_back</span>', '<span class="material-icons">arrow_forward</span>' ],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  };
  
  
  
}