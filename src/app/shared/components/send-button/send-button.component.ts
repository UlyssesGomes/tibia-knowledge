import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-button',
  templateUrl: './send-button.component.html',
  styleUrls: ['./send-button.component.scss']
})
export class SendButtonComponent {

  @Input()
  label;
  @Input()
  disabled: boolean = false;

}
