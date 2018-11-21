import { MatchupModule } from './matchup.module';

describe('MatchupModule', () => {
  let matchupModule: MatchupModule;

  beforeEach(() => {
    matchupModule = new MatchupModule();
  });

  it('should create an instance', () => {
    expect(matchupModule).toBeTruthy();
  });
});
