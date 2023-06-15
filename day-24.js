function register(event){
    event.preventDefault()
        var name = document.getElementById("userName").value;
        console.log(name,"-name")
        var number = document.getElementById("userNumber").value;
        console.log(number,"-number")
        var email = document.getElementById("userEmail").value;
        console.log(email,"-email")
        var password = document.getElementById("userPassword").value;
        console.log(password,"-Password")
         
        document.getElementById("userName").value = " "; // assigning
        document.getElementById("userNumber").value = " ";
        document.getElementById("userEmail").value = " ";
        document.getElementById("userPassword").value = " ";

        const  userdata = {
            username:  name,
            usernumber:  number,
            useremail:  email,
            userpassword:  password,
        }

        localStorage.setItem("userlists",JSON.stringify(userdata))
      
    
        alert("you have successfull registerd ..")
    
    }

    function data(){
        var dataFromLs = JSON.parse(localStorage.getItem("userlists"));
        console.log(dataFromLs)


}
    
     





// Native JavaScript







