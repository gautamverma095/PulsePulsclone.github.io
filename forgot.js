document.querySelector("button").addEventListener("click",forgot);
var users = JSON.parse(localStorage.getItem("database")) || [];
function forgot(event){
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var newPassword = document.querySelector("#newPassword").value;
    var confirmPassword = document.querySelector("#confirmPassword").value;
    
    var data = {
        userEmail: email,
        userNewPass: newPassword,
        userConfirmPass: confirmPassword,
    };
    users.push(data);
    console.log(users);
    
    localStorage.setItem("database",JSON.stringify(users));
    if(email == "" || newPassword == "" || confirmPassword == ""){
        alert("Fill all the details");

    }else if (newPassword !== confirmPassword){
       alert("password Mismatched");
    }
    else{
        window.location.href = "login.html";
    }
}