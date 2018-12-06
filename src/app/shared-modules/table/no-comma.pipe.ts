import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noComma'
})
export class NoCommaPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value !== undefined && value !== null) {
      return value.toString().replace(",", "");
    } else {
      return "";
    }
  }

}
