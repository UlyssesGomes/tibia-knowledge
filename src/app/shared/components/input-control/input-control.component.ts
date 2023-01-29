import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss']
})
export class InputControlComponent {

  @Input()
  formGroup;
  @Input()
  controlName;
  @Input()
  label = '';
  @Input()
  type = 'text';

}
