import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sidebar-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<SidebarItem />`);
    assert.dom('[data-test-sidebar-item="main"]').exists();
  });

  test('it renders the name properly', async function(assert) {
    await render(hbs`<SidebarItem @name={{'name'}} />`);
    assert.dom('[data-test-sidebar-item="name"]').hasText('name');
  });

  test('it renders the value properly', async function(assert) {
    await render(hbs`<SidebarItem @value={{'value'}} />`);
    assert.dom('[data-test-sidebar-item="value"]').hasText('value');
  });
});
