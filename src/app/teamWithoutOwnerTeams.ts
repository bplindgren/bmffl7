import { OwnerNoTeams } from './ownerNoTeams';
import { Season } from './season';
import { Game } from './game';

export interface TeamWithoutOwnerTeams {
  id: number;
  name: string;
  abbr: string;
  owner: OwnerNoTeams;
  year: string;
  division: string;
  standing: number;
  gamesPlayed: number;
  wins: number;
  winsRegSeason: number;
  losses: number;
  lossesRegSeason: number;
  ties: number;
  divisionWinner: String;
  champion: boolean;
  pointsFor: number;
  pointsAgainst: number;
}
