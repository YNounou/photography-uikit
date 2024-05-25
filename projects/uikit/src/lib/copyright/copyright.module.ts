import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightComponent } from './copyright.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CopyrightComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [CopyrightComponent]
})
export class CopyrightModule { }
