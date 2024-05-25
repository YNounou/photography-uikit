import { Component, Input } from '@angular/core';

@Component({
  selector: 'uikit-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() id!: string;
  @Input() type: string = "text";
  @Input() name!: string;
  @Input() value!: string;
  @Input() placeholder!: string;
  @Input() backgroundColor: string = "primary"
  @Input() size: string = "medium"

}
