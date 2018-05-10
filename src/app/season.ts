import { Team } from './team';

export class Season {
  id: number;
  year: string;
  teams: Team[];
  completed: boolean;
  champion: Team[];
}
