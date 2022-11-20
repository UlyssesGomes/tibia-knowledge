import { Component, Input, OnInit } from '@angular/core';
import { MenuGroupModel, MenuModel } from '../model/menu-model';

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss']
})
export class MenuGroupComponent {

  @Input()
  menuItems: MenuModel[] = [];

  constructor() { }

  expandMenuGroup(menu) {
    console.log('expandMenuGroup', menu);
    
    menu.open = !menu.open;
  }
}
