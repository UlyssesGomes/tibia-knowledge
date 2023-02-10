import { Component, Input } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

import { MenuGroupModel, MenuItemModel, MenuModel, SidebarColorScheme } from '../model/menu-model';

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

  currentUrl = '';
  currentMenuId = -1;

  constructor(public router: Router) {
    router.events.subscribe(event  => {
      if (event instanceof RouterEvent && this.currentUrl !== event.url) {
        this.currentUrl = event.url;
        this.setOffAllMenus();
      }
   });
  }

  ativeMenuButton(menu) {
    console.log('ativeMenuButton()');
    
    if(menu.type === 'group') {
      menu.open = !menu.open;
    }
    this.currentMenuId = menu.id;
    menu.selected = true;
  }
  
  private setOffAllMenus() {
    console.log('setOffAllMenus()');
    this.menuItems.forEach(menu => {
      if(menu.type === 'group' && menu.id !== this.currentMenuId) {
        let group = menu as MenuGroupModel;
        group.selected = false;
        group.children.forEach(submenu => {
          submenu.selected = false;
        });
      } else if(menu.type === 'item' && menu.id !== this.currentMenuId) {
        let item = menu as MenuItemModel;
        item.selected = false;
      }
    });
  }
}
