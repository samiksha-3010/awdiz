
// datatypes
// string , number, Boolean  
// varibles 
// console.log(); 
// typeof();
// Condition statment - if else 
// && || 
// + - * /
// = == ===
// ++
// < > <= >= 
// Array - for 

// Nested For loop 



// Q Given an target find two number from array which addition is target 

// var target =93;
// var array = [ 3,54,65,32,6,23,56,76,17];

// result "3 17"

// for( var i = 0; i < array.length;i++ ) {
//     console.log(array [i])


// for(var j = i + 1; j < array.length;j++){
// if (array[i] + array[j] == target ) {
// console.log(array [i] , array[j], "got!")

// }  
// console.log(array[i], "+",array[j], "=" ,array[i] + array[j])
// console.log(array[i], " + ", array[j], " = " ,array[i] + array[j])
// }
// }


// Q . Given an target find two number from array which subtration is target .

// var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7];

// // 100,7

// for( var i = 0; i < array.length ; i = i + 1){
//   for ( var j = 1 ; j < array.length ; j = j + 1){
//     if (array[i]-array[j] == target){
//       console.log(array[i],"-",array[j],"=",array[i]-array[j]);
//     }
//   }

// }


//Q Given an target find threee number from array which additionation is target .

var target = 93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];

//Hint - use three nested for loops 

for (var i = 0; i < array.length-2; i = i + 1) {
  for (var j = i +1 ; j < array.length-1; j = j + 1) {
    for (var k = j + 1 ; k < array.length; k = k + 1) {
    let sum= array[i]+array[j]+array[k];
      if (sum === target) {
       console.log(array[i], array[j], array[k]);
      }
    }
  }
}

// ======-------

// for (var i = 0; i < array.length - 2; i = i +1 ){
//   for(var j = i +1; j < array.length -1 ;j = j +1){
//     for (var k = j + 1 ; k < array.length;  k = k +1 ){
//       let sum = array[i]+array[j]+array[k];
//       if (sum === target){
//         console.log (array[i] ,array[j],array[k]);
//       }
//     }
//   }
// }