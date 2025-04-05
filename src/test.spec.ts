import { describe, it, expect } from 'vitest';
import { sub } from './test';

describe('sub', () => {
  it('should add two positive numbers', () => {
    expect(sub(2, 3)).toBe(5);
  });

  it('should add a positive and negative number', () => {
    expect(sub(5, -3)).toBe(2);
  });

  it('should add two negative numbers', () => {
    expect(sub(-2, -3)).toBe(-5);
  });

  it('should add zero', () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(0, 5)).toBe(5);
    expect(sub(0, 0)).toBe(0);
  });

  it('should add decimal numbers', () => {
    expect(sub(1.5, 2.3)).toBeCloseTo(3.8);
  });

  it('should add large numbers', () => {
    expect(sub(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  it('should handle Number.MIN_SAFE_INTEGER', () => {
    expect(sub(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });

  it('should handle Infinity', () => {
    expect(sub(Infinity, 5)).toBe(Infinity);
    expect(sub(5, Infinity)).toBe(Infinity);
    expect(sub(Infinity, Infinity)).toBe(Infinity);
  });

  it('should handle NaN', () => {
    expect(sub(NaN, 5)).toBeNaN();
    expect(sub(5, NaN)).toBeNaN();
    expect(sub(NaN, NaN)).toBeNaN();
  });
});
