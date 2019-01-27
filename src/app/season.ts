import { Team } from './team';

export class Season {
  id: number;
  year: string;
  completed: boolean;
  champion: Team;
}
