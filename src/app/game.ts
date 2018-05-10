import { Team } from './team';
import { Season } from './season'

export class Game {
  id: number;
  season: Season;
  week: number;
  awayTeam: Team;
  awayScore: number;
  homeTeam: Team;
  homeScore: number;
  gameType: string;
  complete: boolean
}
