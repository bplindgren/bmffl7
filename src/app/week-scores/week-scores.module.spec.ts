import { WeekScoresModule } from './week-scores.module';

describe('WeekScoresModule', () => {
  let weekScoresModule: WeekScoresModule;

  beforeEach(() => {
    weekScoresModule = new WeekScoresModule();
  });

  it('should create an instance', () => {
    expect(weekScoresModule).toBeTruthy();
  });
});
