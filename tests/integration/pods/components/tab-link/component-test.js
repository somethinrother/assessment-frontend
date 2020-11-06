import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tab-link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<TabLink />`);
    assert.dom('[data-test-tab="main"]').exists();
  });

  test('it with active styling when isActive is true', async function(assert) {
    await render(hbs`<TabLink @isActive={{true}} />`);
    assert.dom('[data-test-tab="main"]').hasClass('tab--active');
  });

  test('it renders with normal styling when isActive is false', async function(assert) {
    await render(hbs`<TabLink />`);
    assert.dom('[data-test-tab="main"]').doesNotHaveClass('tab--active');
  });
});
