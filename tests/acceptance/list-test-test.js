import { test } from 'qunit';
import moduleForAcceptance from 'cars/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list test');

test('visiting /cars', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/cars', 'should redirect auto');
  });
});
  test('listing /cars', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});
