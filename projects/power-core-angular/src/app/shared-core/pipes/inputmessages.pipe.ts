import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputmessages'
})
export class InputmessagesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    let key = value.key as string;
    switch(key) {
      case 'minlength': {
        return `Min length of ${value.value.requiredLength} characters.` ;
      }
      case 'required': {
        return 'Required field.';
      }
    }
  }

}
