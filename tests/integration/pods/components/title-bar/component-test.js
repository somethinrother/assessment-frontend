import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | title-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<TitleBar />`);
    assert.dom('[data-test-title-bar="main"]').exists();

    await render(hbs`
      <TitleBar>
        template block text
      </TitleBar>
    `);

    assert.dom('[data-test-title-bar="main"]').hasText('template block text');
  });

  test('it renders with a title when passed one', async function(assert) {
    await render(hbs`<TitleBar @title={{'title'}} />`);
    assert.dom('[data-test-title-bar="title"]').hasText('title');
  });

  test('it renders without a title when none is passed', async function(assert) {
    await render(hbs`<TitleBar />`);
    assert.dom('[data-test-title-bar="title"]').doesNotExist();
  });
});
