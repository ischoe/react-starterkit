import test from 'tape';
import jsdom from 'jsdom';
import fs from 'fs';

test('A passing test', (assert) => {

  assert.pass('This test will pass.');
  assert.end();
});

test('Assertions with tape.', (assert) => {
  const expected = 'something to test';
  const actual = 'something to test';

  assert.equal(actual, expected,
    'Given two mismatched values, .equal() should produce a nice bug report');
  assert.end();
});

test('jsdom can be used', (assert) => {
  const index = fs.readFileSync('./src/index.html', 'utf-8');
  const expected = 'HELLO WORLD !';

  jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      assert.equal(h1.innerHTML, expected, 'h1 tag is correct');
      assert.end();
      window.close();
  });

});
