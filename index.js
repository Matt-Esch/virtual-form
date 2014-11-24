var button = require('./button');

module.exports = vform;

function vform(vtree) {
    return {
        button: button(vtree)
    };
}
