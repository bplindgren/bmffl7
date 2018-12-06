import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullToEmptyStr'
})
export class NullToEmptyStrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null) {
      return ""
    } else {
      return value;
    }
  }

}
