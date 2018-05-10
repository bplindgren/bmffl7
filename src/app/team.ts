import { Owner } from './owner';
import { Season } from './season';
import { Game } from './game';

export class Team {
  id: number;
  name: string;
  abbr: string;
  owner: Owner;
  season: Season;
  division: string;
  standing: string;
  gamesPlayed: number;
  wins: number;
  winsRegSeason: number;
  losses: number;
  lossesRegSeason:
  ties: number;
  divisionWinner: string;
  champion: string;
  pointsFor: number;
  pointsAgainst: number;
  homeGames: Game[];
  awayGames: Game[];
}
