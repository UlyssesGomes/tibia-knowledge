import { Component, Input } from '@angular/core';

import { MenuGroupModel, MenuModel, SidebarColorScheme } from './model/menu-model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input()
  menuItems: MenuModel[] = [];
  @Input()
  appName: string;
  @Input()
  logo: string;
  @Input()
  colorScheme!: SidebarColorScheme;  

  constructor() {
    this.appName = '';
    this.logo = '';
  }

}
