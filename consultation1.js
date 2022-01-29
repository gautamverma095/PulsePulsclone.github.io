//navBar Js 
document.getElementById("navLocation").addEventListener("click", function(){
    window.location.href = "#locationSelector";
})

document.querySelector("#videoSubmit").addEventListener("click",submited);

function submited(){
    alert("Thankyou! We will get back to you")
}