// function animals(){
// var animalsArray = ["cat","dog","parrot", "koala", "chimp", "gecko", "termite","hamster", "ocelot", "kangaroo", "naked mole rat"];
// return animalsArray;
// }


// module.exports = {
// 	animals: animals
// };
// OR
// exports.animals = animals;


function animals(callback){
    var lowerCaseAnimals =[];
    animalsArray = ["Cat", "Hamster", "Parrot", "hamster", "Chimp", "Gecko", "termite","hamster", "ocelot", "kangaroo", "naked mole rat", "Hamster"];
    for (i=0; i < animalsArray.length; i++){
        lowerCaseAnimals.push(animalsArray[i].toLowerCase());
    }
    return callback(lowerCaseAnimals);
}

function getHamsters(arr){
    rons_hamsters = arr.filter(function(animal){
        return animal === "hamster";
        }
    );
    console.log(rons_hamsters);
    return rons_hamsters;    
}

// Calling the animals function, passing in getHamsters as the callback.
ron = animals(getHamsters);

exports.animals = animals;
exports.getHamsters = getHamsters;