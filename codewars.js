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
console.log(multiTable(5))

//improved version
function multiTableImproved(number){
  let items = '';
  for (i=1; i<=10; i++){
    items += (`${i} * ${number} = ${i*number}\n`)
  }
  return items.slice(0, -1)   //this removes the last \n at the end!!
}
console.log(multiTableImproved(5));