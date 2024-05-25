import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { TextareaModule } from './textarea/textarea.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CopyrightModule } from './copyright/copyright.module';
import { GalleryModule } from './gallery/gallery.module';



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
