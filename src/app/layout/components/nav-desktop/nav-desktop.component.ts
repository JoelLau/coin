import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '@data/schemas/menu-item';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
})
export class NavDesktopComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() profileOpenState: boolean = false;
  @Input() mobileMenuOpenState: boolean = false;

  @Output() profileOpenStateChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() mobileMenuOpenStateChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  onProfileIconClick(): void {
    this.toggleProfileMenu();
  }

  onMobileMenuButtonClick(): void {
    this.toggleMobileMenu();
  }

  toggleProfileMenu(): void {
    this.profileOpenState = !this.profileOpenState;
    this.profileOpenStateChange.emit(this.profileOpenState);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpenState = !this.mobileMenuOpenState;
    this.mobileMenuOpenStateChange.emit(this.mobileMenuOpenState);
  }
}
