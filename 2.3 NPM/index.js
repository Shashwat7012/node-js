// // var generateName = require('sillyname');
// import generateName from "sillyname";
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

// super heroes
// const superheroes = require('superheroes');
 
// superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
//  import superheroes from "superheroes";
// const a = superheroes.random();
// console.log(`I'm your favourite superhero :- ${a}`)
//=> 'Spider-Ham'

// var names = require('marvel-comics-characters');
import names from 'marvel-comics-characters';
var allNames = [names.all];
var randomName = names.random();
var threeRandomNames = names.random(3);
console.log(`Marvel Character :- ${allNames}`);
console.log("break");
console.log(randomName);
console.log("break");
console.log(threeRandomNames);