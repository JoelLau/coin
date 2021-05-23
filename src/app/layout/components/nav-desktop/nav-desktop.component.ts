import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '@data/schemas/menu-item';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
})
export class NavDesktopComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() mobileMenuOpenState: boolean = false;
  @Output() mobileMenuOpenStateChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  onMobileMenuButtonClick(): void {
    this.toggleMobileMenu();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpenState = !this.mobileMenuOpenState;
    this.mobileMenuOpenStateChange.emit(this.mobileMenuOpenState);
  }
}
