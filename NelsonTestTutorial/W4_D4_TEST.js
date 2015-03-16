// ******************************** \\
// ***** Initialize variables ***** \\
var test = require("tape"),
	hams = require("./index.js"),

	theRonArray,
	theRealArray;
// --- End initialize variables --- \\
// -------------------------------- \\


// ******************************** \\
// ******* Define variables ******* \\
theRonArray = hams.animals(hams.getHamsters);
theRealArray = animalsArray.filter(function(animal) {
	return animal.match(/hamster/i);
});
// ----- End define variables ----- \\
// -------------------------------- \\



// ********************************** \\
// **** Define utility functions **** \\
function arrayLength(arr) {
	return arr.length;
}

function isAHamster(element) {
	return element.match(/hamster/i);
}
// ----- End utlity functions ----- \\
// -------------------------------- \\



// ********************************* \\
// *********** Run tests *********** \\
test("Comparing the length of the arrays - animalsArray and output lowerCaseAnimals", function(t) {
	t.equal(hams.animals(arrayLength), animalsArray.length);
	t.end();
});
test("Getting at least one hamster in Ron's Array", function(t) {
	t.notEqual(-1, theRonArray.indexOf("hamster"));
	t.end();
});
test("Comparing the number of Ron's so-called hamsters", function(t) {
	t.equal(theRonArray.length, theRealArray.length);
	t.end();
});
test("Asking the tough questions: are they really hamsters?", function(t) {
	t.equal(theRonArray.every(isAHamster), true);
	t.end(); 
});
// --------- End run tests --------- \\
// --------------------------------- \\