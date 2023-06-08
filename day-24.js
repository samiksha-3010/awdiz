
// function  register(event) { 


//     event preventDefault();
//     var name = document. getElementById("userName").value;
//     console.log(name, "-name")
//     var name = document. getElementById("userNumber").value;
//     console.log(Number, "-Number")
//     var name = document. getElementById("userEmail").value;
//     console.log(email, "-email")
//     var name = document. getElementById("userPassword").value;
//     console.log(Password, "-Password") 


//       document.getElementById("userName").value = "";  
//       document.getElementById("userNumber").value = "";  
//       document.getElementById("userEmail").value = "";  
//       document.getElementById("userPassword").value = "";  

//       alert("Resgisrerd..")

// }




function register(event) {
    event.preventDefault();
    var name = document.getElementById("userName").value;
    console.log(name, "- name")
    var number = document.getElementById("userNumber").value;
    console.log(number, "- number")
    var email = document.getElementById("userEmail").value;
    console.log(email, "email");
    var password = document.getElementById("userPassword").value;
    console.log(password, "password")

    document.getElementById("userName").value = ""; // assigning
    document.getElementById("userNumber").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";

    alert("Resgitered..")
}




// Native JavaScript







// Native JavaScript