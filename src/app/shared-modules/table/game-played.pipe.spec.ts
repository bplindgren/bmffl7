import { GamePlayedPipe } from './game-played.pipe';

describe('GamePlayedPipe', () => {
  it('create an instance', () => {
    const pipe = new GamePlayedPipe();
    expect(pipe).toBeTruthy();
  });
});
