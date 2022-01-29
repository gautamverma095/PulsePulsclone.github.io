document.querySelector("button").addEventListener("click",signUp);
var userData = JSON.parse(localStorage.getItem("database")) || [];

function signUp(event){
    event.preventDefault();
    var name = document.querySelector("#user").value;
    var mobile = document.querySelector("#mobile").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    

    var userDetails = {
        userName: name,
        userMobile: mobile,
        userEmail: email,
        userPassword: password,
        userCustomerId: Math.floor(100000 + Math.random() * 900000)
    };
    userData.push(userDetails);
    console.log(userData);
    localStorage.setItem("database",JSON.stringify(userData));
    alert("You Have Successfully Created Your Account.")
    window.location.href = "login.html"

}

function openCode(){
    document.querySelector("#ref").style.visibility = "visible";
}
