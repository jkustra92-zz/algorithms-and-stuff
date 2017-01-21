//==================
// SIMPLE ARRAY SUM
//==================

function arraySum(arr) {
  var result = arr.reduce(function(a, b){
    return a + b;
  })
  return result;
}

console.log(arraySum(array));

//======================
// COMPARE THE TRIPLETS
//======================

var a = [5, 6, 7];
var b = [3, 6, 10];
var score = {
  a: 0,
  b: 0,
}

function compareTheTriplets(a, b) {
  // to make this more programmatic, could just use the length of the array. 
  // HOWEVER. in the scope of this problem, will always be triplets. so always 3.
  // rather than using the computational power to calculate the length each time.
  for(var i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      // console.log("a wins");
      score.a += 1;
    } else if (a[i] < b[i]) {
      // console.log("b wins");
      score.b += 1;
    }
  }
}

compareTheTriplets(a, b);
console.log(score.a, score.b);

//=================
// TIME CONVERSION
//=================

// strategy: substring/splice the FUCK out of this.

// input
var time = "07:05:45PM";

// output
// 19:05:45

function timeConversion(time) {
  // console.log(time);
  var newTime = getNewHours(time);
  return removeAmOrPm(newTime);
}

function getNewHours(time) {
  var amOrPm = time.substring(8);
  // console.log(amOrPm);
  var hours = parseInt(time.substring(0, 2));
  // console.log(hours);
  var newHours;
  
  if (hours === 12 && amOrPm === "AM") {
    // if it's 12am, change the hours to zero
    newHours = "00";
    // console.log(newTime);
  } else if (hours === 12 && amOrPm === "PM") {
    // if it's 12pm, leave it alone
    newHours = "12";
  } else if (hours < 12 && amOrPm === "PM") {
    // for any hours after noon, add 12 to them to convert
    newHours = 12 + hours;
  }
  return addNewHours(time, newHours);
}

function addNewHours(time, newHours) {
  var newTime = newHours + time.slice(2);
  return newTime;
}

function removeAmOrPm(newTime) {
  return newTime.substring(0, 8)
}

console.log(timeConversion(time));

//=====================
// DAY ONE: DATA TYPES
//=====================

var i = 4;
var d = 4.0;
var s = "HackerRank ";

//Declare second integer, double (floating point), and string variables
var i1;
var d1;
var s1;

// tried to dynamically assign these variables but i ain't shit and it didn't work.
// will probably come back and rage at this later.

// var variableNames = [i1, d1, s1];
// var values = [12, 4.0, "is the best place to learn and practice coding!"];

// variableNames.map(function(element, index){
//   element = values[index];
//   return element;
// });

// rage-quitting and just assigning them the old-fashioned way.

var i1 = 12;
var d1 = 4.0;
var s1 = "is the best blah blah";

// Print the sum of both integer variables on a new line.
console.log(i1 + i);
// Print the sum of the double variables on a new line.
console.log((d1 + d).toFixed(1));
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + s1);

//====================
// DAY TWO: OPERATORS
//====================

var mealCost = 12.00;
var tipPercent = 20;
var taxPercent = 8;

function totalCostCalculator (mealCost, tipPercent, taxPercent) {
  // okay. so first need to add the tax (just based on meal cost)
  var tax = calculator(mealCost, taxPercent);
  // then need to add the tip (also based on the total meal cost)
  var tip = calculator(mealCost, tipPercent);
  // round it to a whole number. because that's what this shit is asking for.
  var totalCost = Math.round(mealCost + tax + tip);
  // print out those results and stuff
  console.log("the total cost of the meal is " + totalCost + " dollars");
}

// originally had two functions to calculate both tax and tip. 
// but like. they're the same fucking thing. 
// so why not just have one function, fam?
function calculator(mealCost, percent) {
  return mealCost * (percent/100);
}

totalCostCalculator(mealCost, tipPercent, taxPercent);

//=========================
// DAY THREE: CONDITIONALS
//=========================

//instructions: 
// "If is odd, print Weird
// If is even and in the inclusive range of 2 to 5, print Not Weird
// If is even and in the inclusive range of 6 to 20, print Weird
// If is even and greater than 20, print Not Weird"

var n = 22;

if (n % 2 === 1) {
// using modulus to check if the number is odd
  console.log("weird");
} else if ((n % 2 === 0) && (n >= 2 && n <= 5)) {
  // also using it to check if even
  console.log("not weird");
} else if ((n % 2 === 0) && (n >= 6 && n <= 20)) {
  //using "&&" for checking if number falls within the range
  console.log("weird");
} else if ((n % 2 === 0) && (n > 20)) {
  console.log("not weird");
}

//============
// PLUS MINUS
//============

// task: output the fraction value of positive, negative, and instances of zero in a given array

// took a similar approach to that one with the two people's scores because if it ain't broke...
// except no global variables this time because i ain't about that (sometimes)

function arrayFractions() {
  var array = [-4, 3, -9, 0, 4, 1];
  var totals = {
    positives: 0,
    negatives: 0,
    zeros: 0
  }
  getTotals(array, totals);
}

function getTotals(arr, totals) {
  arr.forEach(function(value){
    if (value === 0) {
      totals.zeros++
    } else if (value > 0) {
      totals.positives++
    } else {
      totals.negatives++
    }
  });
  // yes, i am stringing functions together.
  // yes, i can see where that gets tricky. but this is a three function problem, so we good.
  getFractions(arr, totals);
}

function getFractions(arr, totals) {
  // limit to 6 decimal places bc that's what the question calls for
  var positives = (totals.positives/arr.length).toFixed(6);
  var negatives = (totals.negatives/arr.length).toFixed(6);
  var zeros = (totals.zeros/arr.length).toFixed(6);
  
  // print out that shit
  console.log(positives);
  console.log(negatives);
  console.log(zeros);
}

arrayFractions();

//===========
// STAIRCASE
//===========

var n = 4;

function pyramid(n) {
  for (var i = 1; i <= n; i++) {
    // .repeat is a string method which will "construct and return a new string which contains the specified number of copies of the string on which it was called, concatenated together."
    // very useful, fam.
    
    // n - i will provide the number of leading spaces to the #
    
    // so on the first line, there will be 3 spaces and 1 "#"
    // second line will have 2 spaces and 2 "#"
    // you get the gist.
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }

}

pyramid(n);

//==============================
// DAY FOUR: INSTANCE VS. CLASS
//==============================

function Person(age) {
  // first check if age is a valid number before setting.
  this.setAge(age);
  this.yearPasses = function() {
    return this.age++
  }
  this.amIOld = function() {
    if (this.age < 13) {
      console.log("You are young");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager");
    } else {
      console.log("You are old");
    }
  }
}

// member function called during constructor
Person.prototype.setAge = function(age) {
  if (age > 0) {
    this.age = age;    
  } else {
    console.log("Age is not valid, setting age to 0.");
    this.age = 0;
  }
};

var jess = new Person(24);
console.log(jess.age);
jess.yearPasses();
console.log(jess.age);
jess.amIOld();

