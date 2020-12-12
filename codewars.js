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



//Jumping Number (Special Numbers Series #4) (7 kyu)
function jumpingNumber(n){
  for(i=0; i<n.toString().length-1; i++){
    if (Math.abs(n.toString().charAt(i+1) - n.toString().charAt(i)) !== 1){
      return 'Not!!'
    }
  }
  return "Jumping!!"
}



//Training JS #5: Basic data types--Object (8 kyu)
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}



//Welcome! (8 kyu)
var db = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}


function greet(language) {
  return db[language] ? db[language] : 'Welcome'
  }



//Testing 1-2-3 (7 kyu)
var number=function(array){
  var newArr = [];
  for (i=0; i<array.length; i++){
    newArr.push(`${i+1}: ${array[i]}`)
  }
  return newArr
}



//Make a function that does arithmetic! (7 kyu)
function arithmetic(a, b, operator){
  return operator === 'add' ? a+b : operator === 'subtract' ? a-b : operator === 'multiply' ? a*b : a/b
}



//Who is the killer? (7 kyu)
function killer(suspectInfo, dead) {
  for (let key in suspectInfo)
    for (let name in suspectInfo[key])
    if (dead[0] === suspectInfo[key][name] || dead[1] === suspectInfo[key][name]){
      return key
    }
}

//alternate solution
function killer(suspectInfo, dead) {
  for (let key in suspectInfo)
    for (i=0; i<suspectInfo[key].length; i++)
      for (j=0; j<dead.length; j++)
        if (suspectInfo[key][i] === dead[j])
          return key
}



//Check the exam (8 kyu)
function checkExam(array1, array2) {
  var tally = 0
  for (i=0; i<array1.length; i++){
    array1[i] === array2[i] ? tally += 4 : array2[i] === "" ? tally += 0 : tally -= 1
  }
  return tally<0 ? 0 : tally
}



//Valid spacing (7 kyu)
function validSpacing(s) {
  var broken = 0
  s.charAt(0) === " " ? broken += 1 : s.charAt(s.length-1) === " " ? broken += 1 : broken += 0

  for (i=0; i<s.length; i++){
    (s.charAt(i) + s.charAt(i+1) ) === "  " ? broken += 1 : broken += 0
  }
  return broken>=1 ? false : true
}



//Dominant array elements (7 kyu)
function solve(arr){
  newArr = []
  for (i=0; i<arr.length; i++){
    var highest = arr[i]
    for (j=i+1; j<arr.length; j++){
    if (highest < arr[j]){
      highest = arr[j]
      i = j
      }
    }
    newArr.push(highest)
    for (k=0; k<newArr.length; k++){
    }
  }
  newArr = [...new Set(newArr)]
  return newArr
};

//alternative
function solve(arr){
  let newArr = [arr[arr.length-1]]
  for (i=arr.length; i>=0; i--){
      if (arr[i]>newArr[0]){
        newArr.unshift(arr[i])
      }
  }
  return newArr
};



 //Special Number (Special Number Series #5) (7 kyu)
function specialNumber(n){
  if (n.toString().length>1){
    for(i=0; i<n.toString().length; i++){
      if(n.toString().charAt(i) === '6' || 
        n.toString().charAt(i) === '7' || 
        n.toString().charAt(i) === '8' || 
        n.toString().charAt(i) === '9')
        return "NOT!!"
    }
  } else if (n===6 || n===7 || n===8 || n===9){
      return "NOT!!"
  }
  return "Special!!"
}



//Will there be enough space? (8 kyu)
function enough(cap, on, wait) {
  return cap>=on+wait ? 0 : on+wait-cap
}



//Switch it Up!
function switchItUp(n){
  let dict = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine'
  }

  return dict[n]
}



//Parse float (8 kyu)
function parseF(s) {
  let a = parseFloat(s)
  return a===undefined || isNaN(a)===true ? null : parseFloat(s)
}



//String repeat (8 kyu)
function repeatStr (n, s) {
  let word = ''
  for (i=1; i<=n; i++){
    word += s
  }
  return word
}



//Replace all items
function replaceAll(seq, find, replace) {
  var newArr = []
  var newStr = '' 
  if (typeof seq[0]==='string'){
    for (j=0; j<seq.length; j++){
      seq.charAt(j)===find ? newStr += replace : newStr += seq.charAt(j)
      }
  } else {
    for (i=0; i<seq.length; i++){
      seq[i]===find ? newArr.push(replace) : newArr.push(seq[i])
      }
  }
  return typeof seq[0]==='string' ? newStr : newArr
}



//Vowel Count (7 kyu)
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u']
  for (i=0; i<str.length; i++){
    var control = str.charAt(i)
    for (j=0; j<vowels.length; j++){
      control===vowels[j] ? vowelsCount += 1 : vowelsCount += 0
    }
  }
  return vowelsCount;
}



//Mumbling (7 kyu)
function accum(s) {
  let newArrA = []
  let newArrB = []
  for (i=0; i<s.length; i++){
    newArrA.push(s.charAt(i).toLowerCase().repeat(i+1))
      }
  for (j=0; j<newArrA.length; j++){
    newArrB.push(newArrA[j].charAt(0).toUpperCase() + newArrA[j].slice(1))
  }
  return newArrB.join('-')
}

//better version
function accum(s){
  let newArr = []
  for (i=0; i<s.length; i++){
    newArr.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i))
  }
  return newArr.join('-')
}



//Highest and Lowest (7 kyu)
function highAndLow(numbers){
  var newArr = numbers.split(' ').map(Number) //don't fully understand this yet
  newArr.sort(function(a,b){return a-b})
  var str = ''
  str += newArr[newArr.length-1] + ' ' + newArr[0]
    return str
}



//Even or Odd (8 kyu)
function even_or_odd(n) {
  n = Math.abs(n)
  return n%2===0 ? 'Even' : 'Odd'
}



//Sum of positive (8 kyu)
function positiveSum(arr) {
  var tally=0
  for (i=0; i<=arr.length; i++){
    arr[i]>0?tally+=arr[i]:''
  } 
  return tally
}




//Get the Middle Character (7 kyu)
function getMiddle(s){
  var n = s.length
  return n%2===0 ? s.charAt((n/2)-1) + s.charAt(n/2) : s.charAt(n/2)
}



//Opposite number (8 kyu)
function opposite(n) {
  return n*-1
}



//Remove First and Last Character (8 kyu)
function removeChar(str){
  var newStr = ''
  for(i=1; i<str.length-1; i++){
    newStr += str.charAt(i)
  }
  return newStr
};



//Descending Order (7 kyu)
function descendingOrder(n){
  var newArr = []
  var newNum = 0
  for (i=0; i<=n.toString().length; i++){
    newArr.push(n.toString().charAt(i))
  }
  newArr = newArr.sort(function(a,b){return b-a})
  newNum = newArr.join('')
  return parseInt(newNum)
}



//Return Negative (8 kyu)
function makeNegative(n) {
  return n<0 ? n : n*-1
}



//Remove String Spaces
function noSpace(x){
  let newStr = ''
  for (i=0; i<x.length; i++){
    x.charAt(i) === ' ' ? '' : newStr += x.charAt(i)
  }
  return newStr
}



//Square Every Digit (7 kyu)
function squareDigits(num){
  let newArr = []
  for (i=0; i<num.toString().length; i++){
    newArr.push(num.toString().charAt(i)*num.toString().charAt(i))
  }
  return parseInt(newArr.join(''))
}



//Convert boolean values to strings 'Yes' or 'No' (8 kyu)
function boolToWord( bool ){
  return bool ? 'Yes' : 'No'
}



//Shortest Word (7 kyu)
function findShort(s){
  let words = s.split(' ').sort(function(a,b){return a.length-b.length})
  return words[0].length
}



//You're a square! (7 kyu)
function isSquare(n){
  return parseInt(Math.sqrt(n),10)===(Math.sqrt(n)) ? true : false
}



//Exes and Ohs (7 kyu)
function XO(str) {
    let xcount = 0
    let ocount = 0
    for (i=0; i<str.length; i++){
      str.toLowerCase().charAt(i)==='x' ? xcount+=1 : str.toLowerCase().charAt(i)==='o' ? ocount+=1 : ''
    }
    return xcount===ocount
}



//Beginner Series #3 Sum of Numbers (7 kyu)
function getSum( a,b ){
  var tally = 0
  if (a<b){
    for(i=a; i<=b; i++){
      tally += i
      }
    } else if (b<a) {
      for (j=b; j<=a; j++){
        tally += j
        }
    }
  return a===b?a:tally
}



//Growth of a Population (7 kyu)
function nbYear(p0, percent, aug, p) {
  for (i=0; p0<p; i++){
    p0 += (p0*(percent/100))+aug
    console.log(p0)
  }
  return i
}



//List Filtering (7 kyu)
function filter_list(l) {
  let newArr = []
  for(i=0; i<l.length; i++){
    typeof l[i]==='number' ? newArr.push(l[i]) : ''
  }
  return newArr
}



//Reversed Strings (8 kyu)
function solution(str){
  let newStr = ''
  for(i=str.length; i>=0; i--){
    newStr+=str.charAt(i)
  }
  return newStr
}



//Counting sheep... (8 kyu)
function countSheeps(arr) {
  let counter = 0
  for(i=0; i<arr.length; i++){
    arr[i]===true ? counter+=1 : ''
  }
  return counter
}



//Convert a Number to a String! (8 kyu)
function numberToString(n) {
  return n.toString()
}



//Sum of two lowest positive integers (7 kyu)
function sumTwoSmallestNumbers(n) {  
  let foo = n.sort(function(a,b){return a-b})[0]
  let bar = n.sort(function(a,b){return a-b})[1]
  return foo + bar
}



//Find the next perfect square! (7 kyu)
function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1) : -1
}



//Century From Year (8 kyu)
function century(year) {
  var check = parseInt(year.toString().charAt(0))
  var length = year.toString().length

  if (length===4) {
    check = parseInt(year.toString().charAt(0)+year.toString().charAt(1))
  } else if (length===3) {
    check = parseInt(year.toString().charAt(0))
  }
  return check>=year/100 ? check : Math.floor(year/100)+1
}

//easier version
function century(year){
  return Math.ceil(year/100)
}



//Is n divisible by x and y? (8 kyu)
function isDivisible(n, x, y) {
  return n%x===0 && n%y===0
}



//Convert number to reversed array of digits (8 kyu)
function digitize(n) {
  var str = n.toString()
  var newArr = []
  for (i=0; i<str.length; i++){
    newArr.unshift(parseInt(str.charAt(i)))
  }
  return newArr
}



//Basic Mathematical Operations
function basicOp(op, n1, n2){
  return op==='+'?n1+n2:op==='-'?n1-n2:op==='*'?n1*n2:n1/n2
}



//Conver a String to a Number! (8 kyu)
var stringToNumber = function(str){
  return parseInt(str)
}



//Printer Errors (7 kyu)
function printerError(s) {
    var denom = s.length
    var num = 0
    var dict = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (i=0; i<denom; i++){
      control = s.charAt(i)
      for (j=0; j<dict.length; j++){
        control===dict[j]?num+=1:''
      }
    }
    return `${num}/${denom}`
}



//Abbreviate a Two Word Name (8 kyu)
function abbrevName(name){
  var newName = ''
  newName = name.split(' ')
  return `${newName[0].toUpperCase().charAt(0)}.${newName[1].toUpperCase().charAt(0)}`
}



//Multiples of 3 or 5 (6 kyu)
function solution(number){
  var newArr = []
  for (i=number-1; i>0; i--){
    i%3===0 && i%5===0 ? newArr.push(i) : i%3===0 ? newArr.push(i) : i%5===0 ? newArr.push(i) : ''
  }
  return newArr.reduce((a,b)=>a+b,0)
}



//Find the odd int (6 kyu)
function findOdd(a) {
  var list = {}
  for (i=0; i<a.length; i++){
    if (!list[a[i]])  //search if value from 'a' is a key in list already
      list[a[i]]=0    //if not already in list, add property as 'a[i]': 0
      list[a[i]]++    //add 1 to the value for everytime a[i] shows up
  }
  for (key in list){
    if (list[key]%2!==0){
      return parseInt(key)
    }
  }
}



//Categorize New Member (7 kyu)
function openOrSenior(data){
  var newArr = []
  for (i=0; i<data.length; i++){
    if (data[i][0]>=55 && data[i][1]>7){
      newArr.push('Senior')
    } else {
      newArr.push('Open')
    }
  }
  return newArr
}



//Is this a triangle? (7 kyu)
function isTriangle(a,b,c){
  return (a+b)>c && (a+c)>b && (b+c)>a ? true : false
}



//A Needle in the Haystack (8 kyu)
function findNeedle(haystack) {
  var pos = 0
  for (i=0; i<haystack.length; i++){
    haystack[i]==='needle' ? pos=i : ''
  }
  return `found the needle at position ${pos}`
}



//Friend or Foe? (7 kyu)
function friend(friends){
  var newArr = []
  friends.filter(function(elem){
    elem.length===4 ? newArr.push(elem) : ''
  })
  return newArr
}



//Sum of Digits/Digital Root (6 kyu)
function digital_root(n) {
  if (n.toString().length===1){
    return n
  } else {
    var newArr = []
    for(i=0; i<n.toString().length; i++){
      newArr.push(parseInt(n.toString().charAt(i)))
      }
      n = newArr.reduce(function(a,b){
        return a+b
      })
      return digital_root(n)
    }
    return n
}



//Persistent Bugger. (6 kyu)
function persistence(n) {
  var count = 0
  while (n>9){
    count++
    n = n.toString().split('').reduce((a,b)=>a*b)
  }
  return count
}



//Sum of odd numbers (7 kyu)
function rowSumOddNumbers(n) {
  var num = n*n-(n-1)
  var newArr = []
  for (i=0; i<n; i++){
    newArr.push(num+(i*2))
  }
  return newArr.reduce((a,b)=>a+b)
}

console.log(rowSumOddNumbers(4))



//Stop gninnipS My sdroW! (6 kyu)
function spinWords(str){
  var newArr = str.split(' ')
  var retArr = []
  for (var i=0; i<newArr.length; i++){
    newArr[i].length>=5 ? retArr.push(newArr[i].split('').reverse().join('')) : retArr.push(newArr[i])
  }
  return retArr.join(' ')
}



//Counting Duplicates (6 kyu) - count duplicate characters in a string or word
function duplicateCount(text){
  var str = `${text}`.toLowerCase()
  var dict = {}
  var count = 0

  //create list to count each letter
  for (var i=0; i<str.length; i++){
    var control = str.charAt(i)
    if (dict[control]){
      dict[control]++
    } else {
      dict[control] = 1
    }
  }

  //count how many are more than 1 occurance
  for (val in dict){
    dict[val]>1 ? count++ : ''
  }
  return count
}



//Find the Parity Outlier (6 kyu)
function findOutlier(integers){
  var countEven = []
  var countOdd = []

  for (i=0; i<integers.length; i++){
    integers[i]%2===0 ? countEven.push(integers[i]) : countOdd.push(integers[i])
  }
  return countEven.length>countOdd.length ? parseInt(countOdd.join(',')) : parseInt(countEven.join(','))
}



//Who likes it? (6 kyu)
function likes(names) {
  var n = names.length
  return n===0 ? 'no one likes this' : 
  n===1 ? `${names[0]} likes this` : 
  n===2 ? `${names[0]} and ${names[1]} like this` : 
  n===3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : 
  n>3 ? `${names[0]}, ${names[1]} and ${n - 2} others like this` : ''
}



//Duplicate Encoder (6 kyu)
function duplicateEncode(word){
  var str = word.toLowerCase()
  var newList = {}
  var newWord = ''
  for (i=0; i<str.length; i++){
    if (newList[str.charAt(i)]){
      newList[str.charAt(i)]++
    } else {
      newList[str.charAt(i)] = 1
    }
  }
  for (j=0; j<str.length; j++){
    newList[str.charAt(j)]===1 ? newWord+='(' : newWord+=')'
  }
  return newWord
}



//Take a Ten Minute Walk (6 kyu)
function isValidWalk(walk) {
  var norSou = 0
  var easWes = 0
  var list = {n: -1,
              s: 1,
              e: -1,
              w: 1}

  for (i=0; i<walk.length; i++){
    walk[i]==='n' || walk[i]==='s' ? norSou += list[walk[i]] : ''
    walk[i]==='e' || walk[i]==='w' ? easWes += list[walk[i]] : ''
  }
  return walk.length===10 && norSou===0 && easWes===0 ? true : false
}



//Array.diff (6 kyu)
function arrayDiff(a, b) {
  var newArr = []
  a.filter(function(i){
    b.indexOf(i) === -1 ? newArr.push(i) : ''})
  return newArr
}



//Your order, please (6 kyu)
function order(words){
  var newArr = words.split(' ')
  var dict = {}
  var retArr = []
  var newStr = []
  
  for (word in newArr){
    var wordy = newArr[word]
    if (!dict[wordy]) dict[wordy] = ''
    for (l in newArr[word]){
      if (parseInt(newArr[word][l])>0){
        dict[wordy] = parseInt(newArr[word][l]-1)
          }
        }
      }
  
  for (pos in dict){
    retArr.push([pos, dict[pos]])
    retArr.sort(function(a,b){return a[1]-b[1]})  //this sorts the dict by the property values
    }
  
  for (i in retArr){
    newStr.push(retArr[i][0])
    }

  return newStr.join(' ')
}



//Replace With Alphabet Position (6 kyu)
function alphabetPosition(text) {
  var letters = text.toLowerCase().split('')
  var newArr = []
  var answer = []
  var dict = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26
  }
  for (l in letters)
    if (dict[letters[l]] !== undefined || dict[letters[l]] !== null){newArr.push(dict[letters[l]])}

  for (i=0; i<newArr.length; i++){
    if (newArr[i] !== undefined){answer.push(newArr[i])}
  }
  return answer.join(' ')
}
