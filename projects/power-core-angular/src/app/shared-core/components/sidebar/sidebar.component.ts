import { Component, Input, OnInit } from '@angular/core';

import { MenuGroupModel, MenuModel } from './model/menu-model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()
  menuItems: MenuModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
