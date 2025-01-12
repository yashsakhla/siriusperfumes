import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FooterComponent } from '../footer/footer.component';
import { FadeInOnScrollDirective } from '../../directive/fade-in-on-scroll-directive.directive';
import { products } from '../../product-data';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CardComponent,
    MatIconModule,
    ProductCardComponent,
    FooterComponent,
    FadeInOnScrollDirective,
    CarouselModule,
    VideoModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router, public dialog: MatDialog) {}
  active: number = 1;
  showPopup:boolean = false;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    nav: true,
    navText: [
      '<span class="material-icons">arrow_back</span>',
      '<span class="material-icons">arrow_forward</span>',
    ], // Custom navigation text
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
  };

  products: any = products;

  categoryChange(index: number) {
    this.active = index;
  }

  routeProducts() {
    this.router.navigate(['products']);
  }

  openVideoModal(): void {
    this.showPopup=!this.showPopup
  }
}
