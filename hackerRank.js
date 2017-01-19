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
