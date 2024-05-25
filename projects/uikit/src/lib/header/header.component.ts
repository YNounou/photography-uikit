import { Component, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'uikit-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() backgroundColor: string = "primary";

  // Icons
  public faBars = faBars;

  // Variables
  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    console.log(this.isMenuVisible);
  }
}
