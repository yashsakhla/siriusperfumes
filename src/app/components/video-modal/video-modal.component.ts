import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var YT: any;

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.css',
})
export class VideoModalComponent {
  videoUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/WhKJl9W_1Fw?controls=0&autoplay=1&loop=1&playlist=WhKJl9W_1Fw&modestbranding=1&showinfo=0");
  }
}
