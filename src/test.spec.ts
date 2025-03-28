import { describe, it, expect } from 'vitest';
import { sub } from './test';

describe('sub', () => {
  it('should add two numbers correctly', () => {
    expect(sub(2, 3)).toBe(5);
    expect(sub(-2, 3)).toBe(1);
    expect(sub(0, 0)).toBe(0);
  });

  it('should handle decimal numbers', () => {
    expect(sub(2.5, 1.5)).toBe(4);
    expect(sub(-2.5, 1.5)).toBe(-1);
  });

  it('should handle large numbers', () => {
    expect(sub(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(sub(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });

  it('should handle Infinity', () => {
    expect(sub(Infinity, 5)).toBe(Infinity);
    expect(sub(-Infinity, -5)).toBe(-Infinity);
    expect(Number.isNaN(sub(Infinity, -Infinity))).toBe(true); // Infinity + (-Infinity) = NaN
  });

  it('should handle NaN', () => {
    expect(Number.isNaN(sub(NaN, 5))).toBe(true);
    expect(Number.isNaN(sub(5, NaN))).toBe(true);
    expect(Number.isNaN(sub(NaN, NaN))).toBe(true);
  });
});
