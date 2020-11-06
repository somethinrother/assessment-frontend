import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ButtonItem />`);
    assert.dom('[data-test-button-item="main"]').exists();

    await render(hbs`
      <ButtonItem>
        template block text
      </ButtonItem>
    `);

    assert.dom('[data-test-button-item="main"]').hasText('template block text');
  });
});
