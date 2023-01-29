import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-message',
  templateUrl: './form-control-message.component.html',
  styleUrls: ['./form-control-message.component.scss']
})
export class FormControlMessageComponent {

  @Input()
  control;
  @Input()
  customClass = 'p-error block mt-1 ml-1';

}
