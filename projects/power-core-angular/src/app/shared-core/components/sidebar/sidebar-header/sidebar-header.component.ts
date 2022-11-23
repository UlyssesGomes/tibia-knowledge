import { Component, Input, OnInit } from '@angular/core';

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
  title: string;
  @Input()
  backgroundColor: string;

  constructor() {
    this.title = '';
    this.logo = '';
    this.alt = '';
    this.backgroundColor = 'header-custom';
  }

}
