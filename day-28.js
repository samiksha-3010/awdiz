// function 

// function  NameOfFunction(props){
//     console.log("hii")
// }
// NameOfFunction("hii");

// var NameOfFunction2 = (props)=>{
//     console.log(props)

//     NameOfFunction2("Hello")
// }

// var myname = "Samiksha";
// console.log("samiksha")
// myName = "Hey";
// console.log("hey")
// var  myName = 'Hello'
// console.log(myName)

// let  myAge = 22;
// myAge = 23;
// console.log(myAge)

// let myAge = 67;
// console.log(myAge)


// const  myCity = "mumbai";
// myCity  = "Pune";
// const myCity = "Pune";
// console.log("myCity")

// myName = "Samiksha";
// console.log(myName)

 
// myName = "Awdiz"; //  assign 
// console.log(myName)

// // Hoisting

// var myName
// // const myName;  // declare


// clousre
function  outerFunction(){
    var myMarks = 40;
    console.log("Inside inner Funcation");
    function innerfunction(){
        console.log("Inside inner Funcation",myMarks)
}
return innerfunction;
}
// const  res = outerFuncation();
// console.log(res());



// secret - res ke under function store hoga with varible call myMarks

// console.log(res())