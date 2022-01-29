document.querySelector("button").addEventListener("click", signIn);
var regdUsers = JSON.parse(localStorage.getItem("database"));
function signIn(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    flag = false;
    if (email == "admin" && password == "admin") {
        // window.location.href = "admin.html";
    }else{
        for(var i = 0; i < regdUsers.length; i++){
            if(regdUsers[i].userEmail == email && regdUsers[i].userPassword == password){
                window.location.href = "landing_page.html";
                flag = true;
                break;
            } 
        }
       
        if(flag){
            alert("Successfully Login");
        }else{
            alert("Your Email or Password Invalid");
        }
    }
}
