import { PositiveNegativeSymbolPipe } from './positive-negative-symbol.pipe';

describe('PositiveNegativeSymbolPipe', () => {
  it('create an instance', () => {
    const pipe = new PositiveNegativeSymbolPipe();

    expect(pipe).toBeTruthy();
  });

  describe('works with number values', () => {
    it('should append symbol positive number', () => {
      const pipe = new PositiveNegativeSymbolPipe();
      const positive = '+';
      const value = 99;

      expect(pipe.transform(value, positive)).toBe('+99');
    });

    it('should append symbol negative number', () => {
      const pipe = new PositiveNegativeSymbolPipe();
      const negative = '-';
      const value = -99;

      expect(pipe.transform(value, '', negative)).toBe('-99');
    });

    it('should not modify 0', () => {
      const pipe = new PositiveNegativeSymbolPipe();
      const value = 0;

      expect(pipe.transform(value)).toBe('0');
    });
  });

  describe('works with forammted number strings', () => {
    it('should append symbol positive number strings', () => {
      const pipe = new PositiveNegativeSymbolPipe();
      const positive = '+';
      const value = '99.9';

      expect(pipe.transform(value, positive)).toBe('+99.9');
    });

    it('should append symbol negative number strings', () => {
      const pipe = new PositiveNegativeSymbolPipe();
      const negative = '-';
      const value = '-99.3231';

      expect(pipe.transform(value, '', negative)).toBe('-99.3231');
    });

    it("should not modify '0' string ", () => {
      const pipe = new PositiveNegativeSymbolPipe();
      const value = '0';

      expect(pipe.transform(value)).toBe('0');
    });
  });
});
