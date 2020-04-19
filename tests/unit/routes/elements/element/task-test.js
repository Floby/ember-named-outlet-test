import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | elements/element/task', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:elements/element/task');
    assert.ok(route);
  });
});
