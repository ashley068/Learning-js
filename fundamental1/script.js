const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

let BMIMark = markWeight / markHeight ** 2;
let BMIJohn = johnWeight / johnHeight ** 2;
let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

// type of null should be null, not object. THis is a bug
let test = null;
console.log(typeof test);

// let is block scoped, while var is function-scoped

// challenge 2(template literal)
if (markHigherBMI) {
  console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})`);
} else {
  console.log(`John'S(${BMIJohn}) BMI is higher than Mark's(${BMIMark})`);
}

//type coercion
console.log("I am" + 23 + "years old");

// 23103(3 strings are concatenated)
console.log("23" + "10" + 3);

//10
console.log("23" - "10" - 3);

//challenge
let avrDolphins = (106 + 108 + 99) / 3;
let avrKoalas = (88 + 91 + 110) / 3;

if (avrDolphins >= 100 && avrDolphins > avrKoalas) {
  console.log("Dolphins wins the trophy.");
} else if (avrKoalas >= 100 && avrKoalas > avrDolphins) {
  console.log("Koalas wins the trophy.");
} else if (
  avrDolphins >= 100 &&
  avrKoalas >= 100 &&
  avrDolphins === avrKoalas
) {
  console.log("There is a draw.");
} else {
  console.log("No one wins the game!");
}

//challenge 4
let billValue = 320;
let tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
let total = tip + billValue;
console.log(
  "The bill was " +
    billValue +
    ", the tip was " +
    tip +
    ", and the total value is " +
    total
);

//function declaration- we can call this function before the function is defined
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

//arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991, "Jonas"));

// challenge 1
function calAvgScore(firstScore, secondScore, thirdScore) {
  return (firstScore + secondScore + thirdScore) / 3;
}

let dolphinsAvg = calAvgScore(85, 54, 41);
let koalasAvg = calAvgScore(23, 34, 27);
console.log(dolphinsAvg, koalasAvg);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins.");
  }
}

checkWinner(dolphinsAvg, koalasAvg);

//array
const friend = ["Michael", "Steven", "Peter"];
const years = new Array(12, 43, 546, 76);

// challenge array
const calcTip = (billValue1) =>
  billValue1 >= 50 && billValue1 <= 300 ? billValue1 * 0.15 : billValue1 * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total1 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(total1);

const jonas = {
  name: "ashley",
  birthyear: 1996,
  job: "developer",
  friends: ["Michael", "May", "Jade"],
  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },
};

const interestedIn = prompt("choose one: name, age or job?");

console.log(jonas[interestedIn]);
console.log(
  `${jonas.name} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

const markMiller = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const johnSmith = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

markMiller.calcBMI() > johnSmith.calcBMI()
  ? console.log(
      `Mark's BMI(${markMiller.calcBMI()} is higher than John's (${johnSmith.calcBMI()}))`
    )
  : console.log(
      `John's BMI(${johnSmith.calcBMI()} is higher than Mark's (${markMiller.calcBMI()}))`
    );

let billList = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips1 = [];
let totals = [];

for (let i = 0; i < billList.length; i++) {
  let tip = calcTip(billList[i]);
  tips1.push(tip);
  let totalbill = tips1[i] + billList[i];
  totals.push(totalbill);
}

function calcAverage(arr) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (avg = sum / arr.length);
}

console.log(`${calcAverage(totals)}`);

//challenge - developer skill
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

function printForecast(tempArr) {
  let s = "";
  for (let i = 0; i < tempArr.length; i++) {
    const temperature = tempArr[i];
    // s += "..." + temperature + "ºC in " + i + " days";
    s += `${temperature}ºC in ${i + 1} days...`;
  }
  console.log("..." + s);
}
printForecast(data2);
