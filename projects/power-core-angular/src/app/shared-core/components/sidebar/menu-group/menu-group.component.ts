import { Component, Input, OnInit } from '@angular/core';
import { MenuModel, SidebarColorScheme } from '../model/menu-model';

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss']
})
export class MenuGroupComponent {

  @Input()
  menuItems: MenuModel[] = [];
  @Input()
  colorScheme!: SidebarColorScheme;

  constructor() { }

  // TODO - select menu button by route url address.
  expandMenuGroup(menu) {
    menu.open = !menu.open;
  }
}
