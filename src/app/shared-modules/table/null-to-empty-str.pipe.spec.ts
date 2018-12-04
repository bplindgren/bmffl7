import { NullToEmptyStrPipe } from './null-to-empty-str.pipe';

describe('NullToEmptyStrPipe', () => {
  it('create an instance', () => {
    const pipe = new NullToEmptyStrPipe();
    expect(pipe).toBeTruthy();
  });
});
