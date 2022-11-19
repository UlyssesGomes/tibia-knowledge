import { Component, Input, OnInit } from '@angular/core';
import { MenuGroupModel } from '../model/menu-model';

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss']
})
export class MenuGroupComponent {

  @Input()
  menuItems: MenuGroupModel[] = [];

  constructor() { }

  expandMenuGroup(menu) {
    console.log('expandMenuGroup', menu);
    
    menu.open = !menu.open;
  }
}
