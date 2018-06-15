import { SeasonModule } from './season.module';

describe('SeasonModule', () => {
  let seasonModule: SeasonModule;

  beforeEach(() => {
    seasonModule = new SeasonModule();
  });

  it('should create an instance', () => {
    expect(seasonModule).toBeTruthy();
  });
});
