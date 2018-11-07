import { SeasonRoutingModule } from './season-routing.module';

describe('SeasonRoutingModule', () => {
  let seasonRoutingModule: SeasonRoutingModule;

  beforeEach(() => {
    seasonRoutingModule = new SeasonRoutingModule();
  });

  it('should create an instance', () => {
    expect(seasonRoutingModule).toBeTruthy();
  });
});
