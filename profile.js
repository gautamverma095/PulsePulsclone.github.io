document.getElementById("navLocation").addEventListener("click", function(){
    window.location.href = "#locationSelector";
})

var userData = JSON.parse(localStorage.getItem("database")) || [];
var currentUser = userData[userData.length-1];
console.log(currentUser)
document.querySelector("#csId").innerHTML = "customer ID: "+currentUser.customerId;
document.querySelector("#phNo").innerHTML = "Phone Number: " +currentUser.userMobile;
document.querySelector("#name").value = currentUser.userName;
document.querySelector("#email").value = currentUser.userEmail;
document.querySelector("#names").innerHTML = currentUser.userName;


function save() {
    currentUser.userName = document.querySelector("#name").value;
    currentUser.userEmail = document.querySelector("#email").value;
    userData[userData.length-1] = currentUser;
    localStorage.setItem("database",JSON.stringify(userData));
    alert("UserDetails updated Successfully");
    document.querySelector("#names").innerHTML = currentUser.userName;
    console.log(currentUser);
}