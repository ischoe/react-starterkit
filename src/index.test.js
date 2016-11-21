import test from 'tape';
import jsdom from 'jsdom';
import fs from 'fs';

const before = test;
const after = test;

const setup = () => {
  const fixtures = {};

  // Insert your fixture code here.
  // Make sure you're creating fresh objects each
  // time setup() is called.
  return fixtures;
};

const teardown = (fixtures) => {
  // Dispose of your fixtures here.
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

test('hello world correctly displayed', (assert) => {
  const index = fs.readFileSync('./src/index.html', 'utf-8');
  const expected = 'HELLO WORLD !';

  jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      assert.equal(h1.innerHTML, expected, 'h1 tag is correct');
      assert.end();
      window.close();
  });
});
