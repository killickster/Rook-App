import { SnackData } from './snack-data';

describe('SnackData', () => {
  it('should create an instance', () => {
    expect(new SnackData("Kitty ready to discard", "discard")).toBeTruthy();
  });
});
