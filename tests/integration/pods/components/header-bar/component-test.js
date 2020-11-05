import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<HeaderBar />`);

    assert.dom('[data-test-header="main"]').exists();
  });

  test('it renders with large styling if isLarge is true', async function(assert) {
    await render(hbs`<HeaderBar @isLarge={{true}} />`);

    assert.dom('[data-test-header="main"]').hasClass('header--large');
    assert.dom('[data-test-header="image"]').hasClass('link-image--large');
  });

  test('it renders with normal styling if isLarge is false', async function(assert) {
    await render(hbs`<HeaderBar />`);

    assert.dom('[data-test-header="main"]').doesNotHaveClass('header--large');
    assert.dom('[data-test-header="image"]').doesNotHaveClass('header--large');
  });
});
