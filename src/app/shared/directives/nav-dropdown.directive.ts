import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
  selector: '[appNavDropdown]'
})
export class NavDropdownDirective {

  @HostBinding('class.open') _open = false;

  /**
  * Checks if the dropdown menu is open or not.
  */
  isOpen() { return this._open; }

  /**
  * Opens the dropdown menu.
  */
  open() {
    this._open = true;
  }

  /**
  * Closes the dropdown menu .
  */
  close() {
    this._open = false;
  }

  /**
  * Toggles the dropdown menu.
  */
  toggle($event) {
    if (!$event.target.parentNode.classList.contains('open') && this.isOpen() === true) {
      $event.target.parentNode.classList.add('open');
      this.close();
      this.open();
    } else {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    }
  }
}

/**
* Allows the dropdown to be toggled via click.
*/
@Directive({
  selector: '[appNavDropdownToggle]',
})
export class NavDropdownToggleDirective {
  constructor(
      private dropdown: NavDropdownDirective,
  ) {
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    this.dropdown.toggle($event);
  }
}

export const NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
