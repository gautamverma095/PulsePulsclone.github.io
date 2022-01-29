//navBar Js 
document.getElementById("navLocation").addEventListener("click", function(){
    window.location.href = "#locationSelector";
})



var mainContent = document.getElementById("mainContent");

var plans =[
    {
        name:"Basic Master Health Checkup",
        tests:["Thyroid Profile" , "Diabetic profile" , "Cardiac profile"],
        PoweredBy: "Thyrocare",
        time:"24 hrs",
        price:1100,
        imgs:"https://www.pulseplus.in/content/images/lab/lab-icon-1.png"
    
    },
    {
        name:"Hypertension Health Checkup",
        tests:["Aldosterone","Cortisol","Cholesterol tests"],
        PoweredBy: "Thyrocare",
        time:"24 hrs",
        price:4000,
        imgs:"https://www.pulseplus.in/content/images/lab/lab-provider-icon.png"
    },
    {
        name:"Complete Master Health Checkup",
        tests:["Thyroid Profile","Renal profile","Liver function tests"],
        PoweredBy: "Thyrocare",
        time:"24 hrs",
        price:3400,
        imgs:"https://www.pulseplus.in/content/images/lab/lab-provider-icon.png"
    }
]

showPlans(plans)
function showPlans(plans) {
    plans.map(function(element, index) {

        //creating html elements
        var planCard = document.createElement("div");
        planCard.setAttribute("class","planCard")

        var planHeadingDiv = document.createElement("div");
        planHeadingDiv.setAttribute("class","planHeadingDiv")

        var heading = document.createElement("p");
        heading.setAttribute("class","plansHeading");

        var includesDiv = document.createElement("div");
        includesDiv.setAttribute("class","includesDiv")

        var imageDiv1 = document.createElement("div");
        imageDiv1.setAttribute("class","imageDiv1")

        var image1 = document.createElement("img");

        var textDiv1 = document.createElement("div");
        textDiv1.setAttribute("class","textDiv1");

        var text1 = document.createElement("p");
        text1.setAttribute("class","text1");

        var hr = document.createElement("hr");

        var powerByDiv = document.createElement("div");
        powerByDiv.setAttribute("class","powerByDiv")

        var imageDiv2 = document.createElement("div");
        imageDiv2.setAttribute("class","imageDiv2")

        var image2 = document.createElement("img");

        var textDiv2 = document.createElement("div");
        textDiv2.setAttribute("class","textDiv2")

        var text2 = document.createElement("p");
        text2.setAttribute("class","text2")

        var buttonsDiv = document.createElement("div");
        buttonsDiv.setAttribute("class","buttonsDiv")

        var btn1 = document.createElement("button");
        btn1.setAttribute("class","btn1")

        var pricing = document.createElement("p");
        pricing.setAttribute("id","pricing1");


        var btn2 = document.createElement("button");
        btn2.setAttribute("class","btn2")

        var spanC = document.createElement("span");
        spanC.setAttribute("id", "counter")

        var button4 = document.createElement("button");

        
        button4.style.display = "none";
        button4.textContent = "Go to cart";
        button4.setAttribute("id", "addingCart");

        //setting out content for above created html elements.
        //plan heading
        heading.innerHTML = element.name;
        planHeadingDiv.appendChild(heading);

        //includes div
        image1.setAttribute("src","https://www.pulseplus.in/content/images/lab/lab-icon-1.png");
        imageDiv1.appendChild(image1);
        text1.innerHTML = '<b>Includes Following Tests</b><br>'+element.tests[0]+"<br>"+element.tests[1]+"<br>"+element.tests[2];
        textDiv1.appendChild(text1);
        includesDiv.append(imageDiv1, textDiv1, hr);

        //powerByDiv
        image2.setAttribute("src","https://www.pulseplus.in/content/images/lab/lab-provider-icon.png");
        imageDiv2.appendChild(image2);
        text2.innerHTML = 'Power By '+element.PoweredBy+'<br>'+'<ul><li>Online report in 24 hrs</li><li>NABL, CAP accredited</li></ul>';
        textDiv2.appendChild(text2);
        powerByDiv.append(imageDiv2, textDiv2);

        //buttonsDiv
        btn1.innerHTML = '30% off';
        btn2.innerHTML = 'Add To Cart';
        btn2.addEventListener('click', function(){
            addToCart(index);
             
        })
        pricing.innerHTML = '<b>'+element.price*0.7+'</b>'+'<p style="color: grey">'+element.price+'</p>';
        buttonsDiv.append(btn1, pricing, btn2,spanC,button4);
        
        //appending in main planCard
        planCard.append(planHeadingDiv, includesDiv, powerByDiv, buttonsDiv);

        //appending card into mainContent,
        mainContent.appendChild(planCard);
        


    });
    
}






cartData = JSON.parse(localStorage.getItem("cartData")) || [];


function addToCart(index){


   var isPresent = false;
    cartData.map(function(element){
        if(plans[index]===element){
            isPresent = true;
        }
    });
    if(isPresent){
        alert("The Product Is Already In Cart. You Can Increase Its Quantity There. Click Ok to go In Cart");
        window.location.href = "cart.html";
    }else{
    plans[index].quantity = 1;
    cartData.push(plans[index]);
    alert("The Product Is Successfully Added In Cart");
    localStorage.setItem("cartData", JSON.stringify(cartData));
        
    }

}
