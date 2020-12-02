//codewars solutions

//Credit Card Mask (7 kyu)
function maskify(cc){
  if (cc.length<4)
    return cc
  else
    return cc.length>0 ? Array(cc.length-3).join("#") + cc.slice(cc.length-4) : "";
}



//Keep Hydrated (8 kyu)
function litres(time) {
  return Math.floor(time*0.5)
}



//Isograms (7 kyu)
function isIsogramtwo(str) {
  for (i=0; i<str.length; i++){
    for (j=i+1; j<str.length; j++){
      if (str[j] == str[i]){
        return true
      }
    }
  }
  return false
}



//Get Mean (8 kyu)
function getAverage(marks){
  var sum = 0;
  for(i=0; i<marks.length; i++){
    sum += marks[i];
  }
  return Math.floor(sum / marks.length)
}



//Reversed Words (8 kyu)
function reverseWords(str){
  return str = str.split(' ').reverse().join(' ')
}



//Square(n) Sum (8 kyu)
function squareSum(numbers){
  var square = 0;
  for (i=0; i<numbers.length; i++){
    square += numbers[i]*numbers[i]
  }
  return square
}



//Gravity Flip (8 kyu)
function flip(d, a){
  if (d=="R"){
    return a.sort(function(a,b){return a-b});
  } else if (d=="L") {
    return a.sort(function(a,b){return b-a});
  }
}




//L1:Set Alarm (8 kyu)
function setAlarm(employed, vacation){
  if (employed==true && vacation==false)
    return true
  else
    return false
}




//Multiplication table for number (8 kyu)
function multiTable(number){
  let temp = [];
  let items = '';
  for (i=0; i<=10; i++){
    temp.push(number*i)
  } for (j=1; j<=9; j++){
    items += (`${j} * ${number} = ${temp[j]}\n`)
  }
  items += (`10 * ${number} = ${temp[10]}`)   //this is to remove the last \n
  return items
}

//improved version
function multiTableImproved(number){
  let items = '';
  for (i=1; i<=10; i++){
    items += (`${i} * ${number} = ${i*number}\n`)
  }
  return items.slice(0, -1)   //this removes the last \n at the end!!
}



//Complementary DNA (7 kyu)
function DNAStrand(dna){
  var str = ''
  for (var i=0; i<dna.length; i++){
    dna.charAt(i) == 'A' ? str += 'T' : 
    dna.charAt(i) == 'T' ? str += 'A' : 
    dna.charAt(i) == 'C' ? str += 'G' : 
    dna.charAt(i) == 'G' ? str += 'C' : ''
  }
  return str
}



//Array plus array (8 kyu)
function arrayPlusArray(arr1, arr2) {
  var sum = 0
  for (i in arr1)
    sum += arr1[i]
  for (j in arr2)
    sum += arr2[j]
  return sum
}



//Returning Strings (8 kyu)
function greet(name){
  return `Hello, ${name} how are you doing today?`
}



//Filling an array (part 1) (8 kyu)
function arr(n){
  var array = [];
  for (i=0; i<n; i++){
    array.push(i)
  }
  return array
}



//N-th Power (8 kyu)
function index(array, n){
  return n<array.length ? array[n]**n : -1
}



//A wolf in sheep's clothing (8 kyu)
function warnTheSheep(queue){
  var wolf = queue.indexOf('wolf')
  return queue[wolf+1]=='sheep' ? 
  `Oi! Sheep number ${(queue.length)-(wolf+1)}! You are about to be eaten by a wolf!` : 
  `Pls go away and stop eating my sheep`
 }



//Beginner Series #2 Clock (8 kyu)
function past(h,m,s){
  return mili = h*3600000 + m*60000 + s*1000



//Larger Product or Sum (7 kyu)
function sumOrProduct(array, n){
  var sorted = array.sort(function(a,b){return b-a}).reverse();
  var product = 1;
  var sum = 0;

  for (i=0; i<=n-1; i++){
    product *= sorted[i]
  }

  for (j=sorted.length-1; j>=sorted.length-n; j--){
    sum += sorted[j]
  }

  return sum===product ? 'same' : sum>product ? 'sum' : 'product'
}



//You Can't Code Under Pressure #1 (8 kyu)
function doubleInteger(i) {
  return i*2
}



//Are You Playing Banjo? (8 kyu)
function areYouPlayingBanjo(name) {
  return name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}




//Prime Numbers (6 kyu) - my solution works, but times out. Have to reattempt. 
// function isPrime(num) {
//   if (num === 0 || num === 1 || num < 0){
//     return false
//   } else {
//     for (var i=2; i<num; i++){
//       if (num%i===0){
//         return false
//       }
//     }
//   }
//   return true
// }



//Nth power rules them all!
function modifiedSum(a, n) {
  var calc = 0
  var sum = 0
  for (i=0; i<a.length; i++){
    calc += a[i]**n
    sum += a[i]
  }
  return calc-sum
}



//How many consecutive numbers are needed?
function consecutive(arr){
  arr = arr.sort(function(a,b){return a-b})
  diff = arr[arr.length-1] - arr[0]
  console.log(diff)
  return diff > arr.length ? diff+1-arr.length : 0
}



//Row Weights (7 kyu)
function rowWeights(array){
  var sum1 = 0
  var sum2 = 0
  var newArray = []
  for (i=0; i<array.length; i+=2)
    sum1 += array[i]
    newArray.push(sum1)

  for (j=1; j<array.length; j+=2)
    sum2 += array[j]
    newArray.push(sum2)

  return newArray
}

var array = [50, 60, 70, 80]
console.log(rowWeights(array));



//Maximum Product (7 kyu)
function adjacentElementsProduct(array) {
  var a = array[0]*array[1]
  var b = a

  for (i=0; i<array.length; i++){
    var a = array[i]*array[i+1]
    if (a>b){
      b=a;
    }
  }
  return b
}



//Invert values (8 kyu)
function invert(array) {
  var newArr = [];
  for (i=0; i<array.length; i++){
    newArr.push(array[i]*-1)
  }
  return newArr 
}



//Generate range of integers (8 kyu)
function generateRange(min, max, step){
    var newArr = []
    for (i=min; i<max; i+=step){
      newArr.push(i)
    }
    newArr[newArr.length-1]+step<=max ? newArr.push(max) : ''
    return newArr
}

//better version
function generateRange(min, max, step){
    var newArr = []
    for (i=min; i<=max; i+=step){
      newArr.push(i)
    }
    return newArr
}



//Grasshoper-Summation (8 kyu)
var summation = function (num) {
  var sum = 0
  for (i=0; i<=num; i++){
    sum += i
  }
  return sum
}



//Is he gonna survive? (8 kyu)
function hero(bullets, dragons){
  if (bullets/2 >= dragons){
    return true
  }
  return false
}



//Can we divide it? (8 kyu)
function isDivideBy(number, a, b) {
  return number%a===0 && number%b===0
}



//The falling speed of petals (8 kyu)
function sakuraFall(v) {
  return v>0 ? 400/v : 0
}



//Hello,Name or World! (8 kyu)
function hello(name) {
  if (name== 'undefined' || name == null || name == ''){
    return 'Hello, World!'
  } else {
  name = name.toLowerCase()
  name = name.charAt(0).toUpperCase() + name.slice(1)
  return `Hello, ${name}!`
  }
}



//Beginner Series #4 Cockroach (8 kyu)
function cockroachSpeed(s) {
  return Math.floor(s*27.78)
}



//Grasshopper-If/else syntax debug (8 kyu)
function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}



//Reversed sequence (8 kyu)
function reverseSeq (n){
  var newArr = [];
  for (i=n; i>=1; i--){
    newArr.push(i)
  }
  return newArr
}



//Find the first non-consecutive number (8 kyu)
function firstNonConsecutive (arr) {
  var newArr = []
  var position = 0
  for (i=0; i<arr.length-1; i++){
    newArr.push(arr[i+1]-arr[i])
  }
  position = newArr.indexOf(newArr.find(num => num > 1))
  
  if (arr[position+1] === arr[0]){
    return null
  } else
  return arr[position+1]
  }



//Grasshopper - Function syntax debugging (8 kyu)
function main (verb, noun){
  return `${verb} ${noun}`
}



//Grasshopper-Debug sayHello (8 kyu)
function sayHello(name) {
  return `Hello, ${name}`
}




//Holiday VI-Shark Pontoon (8 kyu)
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  dolphin ? sharkSpeed=sharkSpeed/2 : ''
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? 'Alive!' : 'Shark Bait!'
}



//Grasshopper - Debug (8 kyu)
function weatherInfo(temp){
  var c = (temp-32)*(5/9)
  return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`
}



//Capitalization and Mutability (8 kyu)
function capitalizeWord(word) {
  word = word.toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}



//Grasshopper - Messi Goals (8 kyu)
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals



//Area or Perimeter (8 kyu)
const areaOrPerimeter = function(l , w) {
  return l===w ? l*w : (l*2)+(w*2)
};



//Maximum Multiple (7 kyu)
function maxMultiple(divisor, bound){
  let n = Math.floor(bound/divisor)
  return n *= divisor
}
