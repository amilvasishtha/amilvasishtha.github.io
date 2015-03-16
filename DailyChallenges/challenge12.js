// var myString = "I love avocados";
// module.exports = function spaceVoider(myString) {
// 	"use strict";
// 	if (typeof myString === 'string') {
// 		return myString.replace(/\s/g, '');
// 	}
// };


//OR


exports.destroyer = function spaceVoider(myString) {
	"use strict";
	if (typeof myString === 'string') {
		return myString.replace(/\s/g, '');
	}
};

//expoers is an object, destroyer is a functop (or method)