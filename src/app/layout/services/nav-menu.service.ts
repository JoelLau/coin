import { Injectable } from '@angular/core';
import { MenuItems } from '@data/config/defaults/menu-items';
import { MenuItem } from '@data/schemas/menu-item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavMenuService {
  readonly defaultMenuItems = MenuItems;
  private readonly menuItems: BehaviorSubject<MenuItem[]> = new BehaviorSubject<
    MenuItem[]
  >(this.defaultMenuItems);

  fetchMenuItems(): Observable<MenuItem[]> {
    return this.menuItems.asObservable();
  }

  updateMenuItems(menuItems: MenuItem[]): void {
    this.menuItems.next(menuItems);
  }
}
