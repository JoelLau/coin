import { Component } from '@angular/core';
import { MenuItems } from '@data/config/defaults/menu-items';
import { MenuItem } from '@data/schemas/menu-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  menuItems: MenuItem[] = MenuItems;
  mobileMenuOpenState: boolean = false;
}
