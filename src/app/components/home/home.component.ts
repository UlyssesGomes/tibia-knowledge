import { Component, OnInit } from '@angular/core';

import { SidebarColorScheme, MenuGroupModel, MenuItemModel, MenuModel, MenuSectionModel, SelectedColor } from 'projects/power-core-angular/src/app/shared-core/components/sidebar/model/menu-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuList2: MenuGroupModel[] = [
    new MenuGroupModel(
      'Menu 1 com um texto demasiadamente grande para saber se entra uma elipses.',
      '/menu1',
      'pi pi-code',
      [],
      true
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
  ];

  menuList: MenuModel[] = [
    new MenuSectionModel('Section 1'),
    new MenuGroupModel(
      'Menu 1 com um texto demasiadamente grande para saber se entra uma elipses.',
      './menu1',
      'pi pi-code',
      [],
      true
    ),
    new MenuGroupModel(
      'Menu 2',
      './menu2',
      'pi pi-bolt',
      [
        new MenuItemModel('Submenu1', './menu2'),
        new MenuItemModel('Submenu2', './menu3')
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
    new MenuSectionModel('Section 2'),
    new MenuGroupModel(
      'Menu 5',
      '/menu5',
      'pi pi-calendar',
      []
    ),
    new MenuGroupModel(
      'Menu 6',
      '/menu6',
      'pi pi-cog',
      []
    ),
  ];

  sidebarColor!: SidebarColorScheme;

  constructor() {
    this.sidebarColor = new SidebarColorScheme('#942223', '#FFF', '#325899', '#3F3', SelectedColor.DARK);
  }

  ngOnInit(): void {
  }

}
