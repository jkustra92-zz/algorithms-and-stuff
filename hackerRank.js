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

// two ways im going to do ths. convert into an object and then reassemble as a string at the end
// keep it as a string and substring/splice the FUCK out of it.

// input
var time = "07:05:45PM";

// output
// 19:05:45

function timeConversion(time) {
  // console.log(time);
  var amOrPm = time.substring(8);
  var hours = time.substring(0, 2);
  
  if (hours === 12 && amOrPm === "AM") {
    //something about changing it to 0
  }
}

console.log(timeConversion(time));

