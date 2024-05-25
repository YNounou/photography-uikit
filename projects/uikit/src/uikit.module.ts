import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './lib/button/button.module';
import { InputModule } from './lib/input/input.module';
import { TextareaModule } from './lib/textarea/textarea.module';
import { HeaderModule } from './lib/header/header.module';
import { FooterModule } from './lib/footer/footer.module';
import { CopyrightModule } from './copyright/copyright.module';
import { GalleryModule } from './lib/gallery/gallery.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    TextareaModule,
    HeaderModule,
    FooterModule,
    CopyrightModule,
    GalleryModule,
  ]
})
export class UikitModule { }
