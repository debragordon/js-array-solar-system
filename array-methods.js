var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
console.log("original array: ", planets);

//Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".
var el = document.getElementById("planets");

document.getElementById("myBtn").addEventListener("click", function(){
  newArray.forEach(function(planet){el.innerHTML += "<li>" + planet + "</li>"});
});

// Use the map method to create a new array where the first letter of each planet is capitalized
// Use the filter method to create a new array that contains planets with the letter 'e'

var newArray = [];
newArray = planets.map(function(capital){return capital.charAt(0).toUpperCase() + capital.slice(1)}).filter(function(e){var planetToLower = e.toLowerCase();return planetToLower.includes("e")});

// Use the reduce method to create a sentence from the words in the following array

console.log("this is my new sentence: ", newArray.reduce(function(sentence, word){return sentence + " " + word;}));



