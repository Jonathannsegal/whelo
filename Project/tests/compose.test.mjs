import test from 'node:test';
import assert from 'node:assert/strict';
import { compose } from '../src/utils/compose.js';
test('HOC composition preserves right-to-left wrapping', () => {
  assert.equal(compose(x => `outer(${x})`, x => `inner(${x})`)('view'), 'outer(inner(view))');
  assert.equal(compose()('view'), 'view');
});
