import { Component } from '@angular/core';
import { MenuItem } from '@data/schemas/menu-item';
import { NavMenuService } from '@layout/services/nav-menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private navMenuService: NavMenuService) {}

  fetchMenuItems(): Observable<MenuItem[]> {
    return this.navMenuService.fetchMenuItems();
  }
}
