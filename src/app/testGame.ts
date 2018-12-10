import { TeamWithoutOwnerTeams } from './teamWithoutOwnerTeams';
import { Season } from './season'

export interface TestGame {
  id: number;
  week: number;
  awayTeam: TeamWithoutOwnerTeams;
  awayScore: number;
  homeTeam: TeamWithoutOwnerTeams;
  homeScore: number;
  gameType: string;
  completed: boolean
}
