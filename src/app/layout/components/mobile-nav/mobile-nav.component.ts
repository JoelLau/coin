import { Component } from '@angular/core';
import { MenuItem } from '@data/schemas/menu-item';
import { NavMenuService } from '@layout/services/nav-menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent {
  constructor(private navMenuService: NavMenuService) {}

  fetchMenuItems(): Observable<MenuItem[]> {
    return this.navMenuService.fetchMenuItems();
  }
}
