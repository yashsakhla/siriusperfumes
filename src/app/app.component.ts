import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import * as THREE from 'three';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HeaderComponent, HomeComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'siriusperfume';
  message: string = 'Hi, I want to know about your perfumes!'
  constructor(private renderer: Renderer2) {}

  ngOnInit() {

  }
}
