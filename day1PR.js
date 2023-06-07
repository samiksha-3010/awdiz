// Q Given an target find threee number from array which addition is target . 

var target = 93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];
91,1,1
// Hint - use three nested for loops


for (var i=0; i< array.length; i++) {
    // console.log(array[i])

for (var j=1 + 1; j< array.length;j++){
    console.log(array[j])

if (array[i] + array[j] == target){
    console.log(array[i] , array[j] , "got!")
} 
console.log(array[i],"+", array[j] , "=",array[i]+ array[j] )
}
}