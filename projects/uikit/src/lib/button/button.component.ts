import { Component, Input } from '@angular/core';

@Component({
  selector: 'uikit-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() backgroundColor: string = "primary";
  @Input() text!: string;
  @Input() size: string = "medium";

}
