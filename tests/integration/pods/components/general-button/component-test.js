import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | general-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<GeneralButton />`);

    assert.dom('[data-test-button="main"]').exists();

    await render(hbs`
      <GeneralButton>
        template block text
      </GeneralButton>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it has secondary styling when isSecondary is true', async function(assert) {
    await render(hbs`<GeneralButton @isSecondary={{true}} />`);

    assert.dom('[data-test-button="main"]').hasClass('button--secondary');
  });

  test('it has full width  when fullWidth is true', async function(assert) {
    await render(hbs`<GeneralButton @fullWidth={{true}} />`);

    assert.dom('[data-test-button="main"]').hasClass('button--full-width');
  });

  test('it has icon styling when hasIcon is true', async function(assert) {
    await render(hbs`<GeneralButton @hasIcon={{true}} />`);

    assert.dom('[data-test-button="main"]').hasClass('button--icon');
  });
});
