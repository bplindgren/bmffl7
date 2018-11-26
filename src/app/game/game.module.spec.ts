import { GameModule } from './game.module';

describe('MatchupModule', () => {
  let gameModule: GameModule;

  beforeEach(() => {
    gameModule = new GameModule();
  });

  it('should create an instance', () => {
    expect(gameModule).toBeTruthy();
  });
});
