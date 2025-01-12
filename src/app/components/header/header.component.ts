import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  constructor(private route:Router){

  }
  isSidenavOpen = false;

  matList = [
    "Signature Perfumes",
    "Unisex Perfumes",
    "Our Top Selling",
    "Trending",
    "contact Us"

  ]

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  productRoute(){
    this.isSidenavOpen = false;
    this.route.navigate(['products']);
  }
}
