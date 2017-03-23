import test from 'tape';
import jsdom from 'jsdom';
import fs from 'fs';

const before = test;
const after = test;

const setup = () => {
  const fixtures = {};
  return fixtures;
};

const teardown = (fixtures) => {

};

test('A test with fixtures', (assert) => {
  const fixture = setup();

  assert.equal(typeof fixture, 'object',
    'fixture should return an object');

  teardown(fixture);
  assert.end();
});


test('Assertions with tape.', (assert) => {
  const expected = 'something to test';
  const actual = 'something to test';

  assert.equal(actual, expected,
    'Given two mismatched values, .equal() should produce a nice bug report');
  assert.end();
});