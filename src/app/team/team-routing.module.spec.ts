import { TeamRoutingModule } from './team-routing.module';

describe('TeamRoutingModule', () => {
  let teamRoutingModule: TeamRoutingModule;

  beforeEach(() => {
    teamRoutingModule = new TeamRoutingModule();
  });

  it('should create an instance', () => {
    expect(teamRoutingModule).toBeTruthy();
  });
});
