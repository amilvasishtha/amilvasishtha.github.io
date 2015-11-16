function driveCar (manakin) {
	console.log ("Who wants to drive? How about you Person A?");
	var keys = " turns the car on ";
	manakin(keys);
}

function personA(keys){
	console.log("Person A"+ keys +"and drives away");
}

driveCar(personA);






function driveCar2 (manakin) {
	var keys = "in ignition";
		console.log ("Who wants to drive? How about you Person B?");
		setTimeout(function(){
			keys = " turns the car on ";
			manakin(keys);
		},2000);
}

function personB(keys){
	console.log("Person B pauses for a moment but reluctantly"+keys +"and drives away");
}

driveCar2(personB);