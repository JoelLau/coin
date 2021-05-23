import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '@data/schemas/menu-item';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss'],
})
export class NavMobileComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() mobileMenuOpenState: boolean = false;
  @Output() mobileMenuOpenStateChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
}
