import { Component, Input } from '@angular/core';
import { SidebarColorScheme } from '../model/menu-model';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent {

  @Input()
  logo: string;
  @Input()
  alt: string;
  @Input()
  appName: string;
  @Input()
  backgroundColor: string;
  @Input()
  colorScheme!: SidebarColorScheme;

  constructor() {
    this.appName = '';
    this.logo = '';
    this.alt = '';
    this.backgroundColor = 'header-custom';
  }

  sidebarExpandColapse() {

  }

}
