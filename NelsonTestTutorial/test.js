// var test = require('tape');
// var a = require('./index.js');
// var path = require('path');

// test('hamster is in array', function(t) {
// 	var animalsArray = a.animals();
// 	t.deepEqual(animalsArray, ["cat","dog","parrot", "koala", "chimp", "gecko", "termite","hamster", "ocelot", "kangaroo", "naked mole rat"], "Array of animals contains Ron's hamster!");
// 	t.end();
// });


var test = require('tape');
var cage = require('./index.js');

test('hamster is in the cage', function(t) {
	t.plan(1);
	arr = cage.animals();
	t.notEqual(arr.indexOf('hamster'), -1, "We have your hamster!");
	t.end();
});

// In above test: if hamster is not in the array, indexOf will return -1, hence we don't want it to equal to -1