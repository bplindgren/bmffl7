import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'gamePlayed' })
export class GamePlayedPipe implements PipeTransform {

  transform(value: number, gamePlayed: String): any {
    console.log(value, gamePlayed);
    return gamePlayed !== null ? value : "";
  }

}
