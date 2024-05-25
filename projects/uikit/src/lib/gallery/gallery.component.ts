import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface Item {
  src: string,
  title: string,
  description: string
}

@Component({
  selector: 'uikit-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({Transform: 'scale(0.5)'}),
        animate('150ms', style({Transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({Transform: 'scale(1)'}),
        animate('150ms', style({Transform: 'scale(0.5)'}))
      ])
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms', style({opacity: 0.8})) 
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {
  @Input() galleryData: Item[] = [];
  @Input() showCount = false;
  @Input() mode: string = "normal"

  // Icons
  faTimes = faTimes;

  // Properties
  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  ngOnInit() {
    this.totalImageCount = this.galleryData.length;
  }

  onPreviewImage(index: number) {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.showMask = false;
    this.previewImage = false;
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) 
      this.currentIndex = this.galleryData.length - 1;

    
    this.currentLightboxImage = this.galleryData[this.currentIndex];
    console.log(this.currentLightboxImage)
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.totalImageCount - 1)
      this.currentIndex = 0;

    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
}
