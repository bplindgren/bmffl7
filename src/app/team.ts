import { Owner } from './owner';

export class Team {
  id: number;
  name: string;
  abbr: string;
  owner: Owner;
  year: string;
  division: string;
  standing: number;
  gamesPlayed: number;
  wins: number;
  winsRegSeason: number;
  losses: number;
  lossesRegSeason: number;
  ties: number;
  divisionWinner: string;
  champion: boolean;
  pointsFor: number;
  pointsAgainst: number;
}
