import { Owner } from './owner';
import { Team } from './team';
import { AllTimeStats } from './allTimeStats';

export class OwnerCardConfig {
  owner: Owner;
  teams: Team[];
  stats: AllTimeStats;
}
