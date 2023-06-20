


var array = [ {  id: 1, name: "samiksha", age: 25, surname: "yadav" },
 { id: 2, name: "Anika" , age: 10, surname: "yadav"},
  { id: 3, name:  "Pihu", age: 19, surname: "xyz" },
  { id: 4, name: "Nidhi", age: 22, surname: "xyz"},];

  array.map((object) => { 
    console.log(object) 

  })

var username = ' samikshayadav'
var index = array.findIndex((object) => object.name == username);
console.log(index);


var UserName = 'samiksha';
var selectedUser = array.find((kuchBhi) => kuchBhi. name == UserName);
console.log(selectedUser)

var userId = 3;
var selectedUser = array .find ((samiksha => samiksha.id == userId))
console.log(selectedUser);


var  userAge = 22;
var  selectedUser = array.find ((object => object.age == userAge));
console.log( selectedUser)

var numbers = [1,2,3,5,7,6,4,9,67,23];
console.log(numbers.sort())


var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((a, b) => b - a))

var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((a, b) => a - b))

const words = [ 'anika', 'disha', 'vibha', 'nidhiyada','destruction', 'present ', ]
const result = words.filter(words => words.length <6);
console.log(result)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'samikshayadav'];

const result = words.filter(word => word.length < 8);

console.log(result);