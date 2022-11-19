import { Component, OnInit } from '@angular/core';

import { MenuGroupModel, MenuItemModel } from 'projects/power-core-angular/src/app/shared-core/components/sidebar/model/menu-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuList: MenuGroupModel[] = [
    new MenuGroupModel(
      'Menu 1 com um texto demasiadamente grande para saber se entra uma elipses.',
      '/menu1',
      'pi pi-code',
      []
    ),
    new MenuGroupModel(
      'Menu 2',
      '/menu2',
      'pi pi-bolt',
      [
        new MenuItemModel('Submenu1', 'subroute1'),
        new MenuItemModel('Submenu2', 'subroute2'),
        new MenuItemModel('Submenu3', 'subroute3')
      ]
    ),
    new MenuGroupModel(
      'Menu 3',
      '/menu3',
      'pi pi-map',
      []
    ),
    new MenuGroupModel(
      'Menu 4',
      '/menu4',
      'pi pi-shield',
      []
    ),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
