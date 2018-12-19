// import { Team } from './team';
// import { Season } from './season'
//
// export class Game {
//   id: number;
//   season: Season;
//   week: number;
//   awayTeam: Team;
//   awayScore: number;
//   homeTeam: Team;
//   homeScore: number;
//   gameType: string;
//   completed: boolean
// }
import { TeamWithoutOwnerTeams } from './teamWithoutOwnerTeams';
import { Season } from './season'

export interface Game {
  id: number;
  week: number;
  awayTeam: TeamWithoutOwnerTeams;
  awayScore: number;
  homeTeam: TeamWithoutOwnerTeams;
  homeScore: number;
  gameType: string;
  completed: boolean
}
