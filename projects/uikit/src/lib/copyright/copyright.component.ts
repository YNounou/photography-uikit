import { Component, Input } from '@angular/core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'uikit-copyright',
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss'
})
export class CopyrightComponent {
  @Input() backgroundColor: string = "primary";

  faCopy = faCopyright;

}
