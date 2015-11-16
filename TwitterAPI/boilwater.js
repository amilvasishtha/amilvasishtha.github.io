//Boil the water
function boilWater(next) {
	var water = "cold";
	setTimeout(function() {
		water = "hot";
		console.log('inside '+ water);
		// if (arguments.length !== 0) {
		// 	next(water);
		// }
		// or
		typeof next === 'function' && next(water) || console.log("No callback passed");
	}, 2000); 
}

function pourWater(water){
	console.log("pouring "+ water +" water into the mug");
}

function pourWaterIntoPotNoodle(water){
	console.log("pouring "+ water +" water into pot noodles");
}

boilWater(pourWater);

boilWater(function (water) {
	console.log('hello '+water+'ty!')
});


boilWater('hello');