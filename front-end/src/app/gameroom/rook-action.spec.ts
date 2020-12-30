import { RookAction } from './rook-action';

describe('RookAction', () => {
  it('should create an instance', () => {
    expect(new RookAction("bid", null)).toBeTruthy();
  });
});
