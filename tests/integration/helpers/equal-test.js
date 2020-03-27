import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | equal', function(hooks) {
  setupRenderingTest(hooks);


  test('it sholud return false', async function(assert) {
    await render(hbs`{{equal}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('it should return false', async function(assert) {
    this.set('inputValue', '1234');
    await render(hbs`{{equal inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('it should return false, this is not equal', async function(assert) {
    this.set('inputValueA', 'A');
    this.set('inputValueB', 'B');
    await render(hbs`{{equal inputValueA inputValueB}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('it should return false, this is not equal', async function(assert) {
    this.set('inputValueA', '');
    this.set('inputValueB', null);
    await render(hbs`{{equal inputValueA inputValueB}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('it should return false, this is not equal', async function(assert) {
    this.set('inputValueA', null);
    this.set('inputValueB', undefined);
    await render(hbs`{{equal inputValueA inputValueB}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('it should return true this is equal', async function(assert) {
    this.set('inputValueA', '1234');
    this.set('inputValueB', '1234');
    await render(hbs`{{equal inputValueA inputValueB}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('it should return true this is equal', async function(assert) {
    this.set('inputValueA', '');
    this.set('inputValueB', '');
    await render(hbs`{{equal inputValueA inputValueB}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('it should return true this is equal', async function(assert) {
    this.set('inputValueA', null);
    this.set('inputValueB', null);
    await render(hbs`{{equal inputValueA inputValueB}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('it should return true this is equal', async function(assert) {
    this.set('inputValueA', undefined);
    this.set('inputValueB', undefined);
    await render(hbs`{{equal inputValueA inputValueB}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('it should return true this is equal', async function(assert) {
    this.set('inputValueA', []);
    this.set('inputValueB', []);
    await render(hbs`{{equal inputValueA inputValueB}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('it should return true this is equal', async function(assert) {
    this.set('inputValueA', {});
    this.set('inputValueB', {});
    await render(hbs`{{equal inputValueA inputValueB}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

});
