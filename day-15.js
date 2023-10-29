// var number = 10;
// var number = 20;

// var addition = number1 + number2;
// console.log(addition)

// var sub = number1 - number2;
// console.log(sub)

// var mul = number1 * number2;
// console.log(mul)

// var divid = number1 / number2;
// console.log(divid)

// var i =1;
// console.log(1)
// i = i +1;
// i++;
// i++;
// i++;
// i++;
// console.log(1)




// var number = 100;
// console.log(number > 150)

// Conditional Statement

// 1. if else 
// 2. switch

// 1. if else
//     if (conditions) {
//         code to be execute
//         console.log("condition true")
//     } else if (condtions second) {
//         code to be execute
//     console.log("condition true")
//     }  else if (condtions second) {
//             code to be execute
//         console.log("condition true")
//     }else {
//         code to be execute
//     console.log("condition false")
//     }

// Q. Check given number is lesser than 100 or 150 or 200;

// var number = 98763;
// console.log(number < 5)
// if (number < 100) {


// console.log("number is leser than 100.")
// }else if ( number < 150) {
//     console.log("number is leser than 150 and grater than 150....")
// } else if (number < 98765){
//     console.log("number is grater than 98765")
// }
// Q. Check user age and provied licennnn... 

// if user age is 18 then he is applicbke for Learnign licc... 
//  user age is greater than 18 and lesser than 80 then dl 
//   user age is lesser 18 or greter 80 not allowed dl  

// var userAge = 25;

// if (userAge == 18) {
//     console.log("You are applicable for Learning Licence...")
// } else if( userAge < 80 && userAge > 18 ){
//     console.log("You are allow for Driving Licence..")
// } else {
//     console.log("You are NOT allow for driving licenceee...")
// }


//  var number1 = 123;
//  var number2 = "123";
//  console.log(num1 == num2)
//  console.log(num1 === num2)

//  var num1 = 98;
//  console.log(num1 > 50 && num1 < 99 && num1 < 10)
// console.log(num1 > 50 || num1 < 90 || num1 < 20)


//  datatypes
//  string, number, boolens
//  varibles
//  console.log();
//  typeof();
//  condition statement if else
//  && ||
//  + ,-,*,/
//  =, == , ===
//  ++
//  <> < = > =




// Question 1. Find the  user age is greter than 19 or not. 

var userAge = 20;
// console.log(userAge > 19)

if (userAge > 19) {
    console.log("You are allowed for the  Drving Liecence.")
} else {
    console.log("You are not allowed for the  Drving Liecence.")
}

// Qusstion  2. Find user age is greter than 19 and lesser than 90 or not .

var userAge = 10;
if(userAge > 19 && userAge < 90){
    console.log(" youe is a greater than 19 and lesser than 90 you are allow for Lieceance")
}else{
    console.log("Your age is a might be leeser than 19 and more than 90")
}

// Qustion  3. Find user age is greter than 19 and lesser than 90  then "allow for Driving Liecence" ,
// if age is lesser than 19 then return "you are under age" ,
// if age more than 90, then return "Your age is over",
// if age is 19 then return " you are allow for Learning Liencance."

var userAge = 19;
if(userAge > 19 && userAge < 90){
    console.log("You are Allowd")
}else if(userAge < 19){
    console.log("You are under age")
}else if(userAge >= 19){
    console.log("Your age is over")
}else{
    console.log("you are allow for Learning Liencance.")
}

var material = "steel";

switch (material) {
    case "steel":
        console.log("Material is steel")
        break;
    case "copper":
        console.log("Material is copper")
        break;
    case "plastic":
        console.log("Material is plastic")
        break;
    default:
        console.log("Material is not defined.")
        break;
}


var myData = ["Samiksha", 25, true, "Hii", 23456, [1, 2, 3]]
console.log(myData)
console.log(myData.length)
console.log(myData[0])
console.log(myData[1])
console.log(myData[2])
console.log(myData[3])
console.log(myData[4])
console.log(myData[5])
console.log(myData[5][0])

  // push pop method 
//   push add the Element end of array
// pop remove last element


var student = ['jay', 'raj', 'abc'];

console.log(student)

student.push("samiksha") 

console.log(student)


var number = [1, 2, 4, 5]
number.pop(); 
number.pop();
number.pop();
console.log(number)