import { Component, Input } from '@angular/core';

@Component({
  selector: 'uikit-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() text!: string;
  @Input() backgroundColor: string = "primary";
  @Input() size: string = "medium";

}
