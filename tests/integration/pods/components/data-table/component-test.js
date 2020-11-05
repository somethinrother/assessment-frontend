import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<DataTable />`);

    assert.dom('[data-test-table="body"]').exists();
  });

  test('renders footer when passed the correct variable', async function(assert) {
    await render(hbs`<DataTable @withFooter={{true}} />`);

    assert.dom('[data-test-table="footer"]').exists();
  });

  test('does not render footer when not passed the correct variable', async function(assert) {
    await render(hbs`<DataTable />`);

    assert.dom('[data-test-table="footer"]').doesNotExist();
  });
});
