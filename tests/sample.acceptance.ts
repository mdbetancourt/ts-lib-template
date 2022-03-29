import { describe, expect, it } from 'vitest';
import { sample } from '../src';

describe('test', function () {
  it('sample()', function () {
    expect(sample()).toBe('sample');
  });
});
