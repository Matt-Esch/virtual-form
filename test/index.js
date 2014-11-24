var test = require('tape');

var virtualForm = require('../index.js');

test('virtualForm is a function', function (assert) {
    assert.equal(typeof virtualForm, 'function');
    assert.end();
});
