import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | element/create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:element/create');
    assert.ok(route);
  });
});
