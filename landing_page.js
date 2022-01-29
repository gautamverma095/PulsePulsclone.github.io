//navBar Js 
document.getElementById("navLocation").addEventListener("click", function(){
    window.location.href = "#locationSelector";
})


//sliding images code

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



//product wala code
var prodPage = document.getElementById("productPage");

var extraProd = [
        {
            proid:1,
            name:"A Clav 625 mg Tablet",
            location:"Capital Pharma",
            price:195.00,
            off:20,
            cou:0,
            catg:"Weight Management",
            instock:9,
            avail:"Instock",
            imgs:"https://th.bing.com/th/id/OIP.59U8Ip0sA2No8W6qp-C-1AHaHa?pid=ImgDet&w=511&h=512&rs=1",
            Packing: "6 Tablets / Strip",
            pruductdetailes:{
                SKU: 'PC-1211',
                ProductDescription: 'A Clav 625 mg Tablet is manufactured by Capital Pharma',
                Packing: 'Strip',
                Condition: 'New',
                Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
            }
        },
        {
            proid:2,
            name:"A Daxid L Tablet",
            location:"A Daxid L Tablet",
            price:50.00,
            off:5.00,
            cou:0,
            catg:"Beauty",
            instock:3,
            avail:"Out of Stock",
            imgs:"https://th.bing.com/th/id/OIP.59U8Ip0sA2No8W6qp-C-1AHaHa?pid=ImgDet&w=511&h=512&rs=1",
            Packing: "10 Tablets / Strip",
            pruductdetailes:{
                SKU: 'PC-44563',
                ProductDescription: 'A Daxid L Tablet is manufactured by Eskon Pharma',
                Packing: 'Strip',
                Condition: 'New',
                Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
                
            } 
        },
        
            {
                proid:3,
                name:"Aaranac P Tablet",
                location:"Aaranac P Tablet",
                imgs:"https://th.bing.com/th/id/OIP.59U8Ip0sA2No8W6qp-C-1AHaHa?pid=ImgDet&w=511&h=512&rs=1",
                price:37.50,
                off:5.00,
                cou:0,
                catg:"Beauty",
                instock:4,
                avail:"In Stock",
                Packing: "10 Tablets / Strip",
                pruductdetailes:{
                    SKU: 'PC-2065',
                    ProductDescription: 'Aaranac P Tablet is manufactured by Aara Life Sciences (I) Pvt Ltd',
                    Packing: 'Strip',
                    Condition: 'New',
                    Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
                    
                } 
            },
            {
                proid:4,
                name:"Gabagesic Gel 30 gm",
                location:"Crescent Therapeutics Ltd",
                price:232.80,
                off:0,
                cou:0,
                catg:"Medical Device",
                instock:3,
                avail:"In Stock",
                imgs:"https://media.istockphoto.com/vectors/pill-bottle-with-pills-vector-id459969585?k=6&m=459969585&s=612x612&w=0&h=ZyDyz05L-WMSSCs8v8RBxw4mZ-byXDiy008yAyNAv20=",
                Packing: "Tube",
                pruductdetailes:{
                    SKU: 'PC-15264',
                    ProductDescription: 'Gabagesic Gel 30 gm is manufactured by Linux Laboratories',
                    Packing: 'Tube',
                    Condition: 'New',
                    Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
                    
                } 
            },
            {
                proid:5,
                name:"Gabarich 150 mg Tablet",
                location:"Crescent Therapeutics Ltd",
                price:98.62,
                off:0,
                cou:0,
                catg:"Ayurveda",
                instock:1,
                avail:"In Stock",
                imgs:"https://th.bing.com/th/id/OIP.59U8Ip0sA2No8W6qp-C-1AHaHa?pid=ImgDet&w=511&h=512&rs=1",
                Packing: "10 Tablets / Strip",
                pruductdetailes:{
                    SKU: 'SKU: PC-14550',
                    ProductDescription: 'Gabarich 150 mg Tablet is manufactured by Crescent Therapeutics Ltd',
                    Packing: 'Strip',
                    Condition: 'New',
                    Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
                    
                } 
            },
            {
                proid:6,
                name:"Macbery PD Syrup",
                location:"Macleods Pharmaceuticals Pvt Ltd",
                price:62.40,
                off:5.00,
                cou:0,
                catg:"Ayurveda",
                instock:10,
                avail:"In Stock",
                imgs:"https://media.istockphoto.com/vectors/pill-bottle-with-pills-vector-id459969585?k=6&m=459969585&s=612x612&w=0&h=ZyDyz05L-WMSSCs8v8RBxw4mZ-byXDiy008yAyNAv20=",
                Packing: "Macbery PD Syrup is manufactured by Macleods Pharmaceuticals Pvt Ltd",
                pruductdetailes:{
                    SKU: 'PC-53321',
                    ProductDescription: 'Macbery PD Syrup is manufactured by Macleods Pharmaceuticals Pvt Ltd',
                    Packing: 'Macbery PD Syrup is manufactured by Macleods Pharmaceuticals Pvt Ltd',
                    Condition: 'New',
                    Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
                    
                } 
            }
    ];

    var productsSlider = document.createElement("div");
    extraProd.map(function(element, index){
                var box = document.createElement("div");
                var inBoxDiv1 = document.createElement("div");
                var prodImage = document.createElement("img");
                var inBoxDiv2 = document.createElement("div");
                var prodTitle = document.createElement("p");
                var prodPrice = document.createElement("p");
                var details = document.createElement("p");
                var addBtn = document.createElement("button");

                prodImage.setAttribute("src", element.imgs);
                inBoxDiv1.appendChild(prodImage);

                prodTitle.textContent = element.name;
                prodPrice.textContent = "₹ " + element.price;
                details.innerHTML = "<ul><li>SKU:-"+ element.pruductdetailes.SKU +"</li><li>Description:-"+ element.pruductdetailes.ProductDescription +"</li></ul>"
                addBtn.textContent = "+ Buy Now";
                addBtn.addEventListener("click", function(){
                    addToCart(index);
                });
                addBtn.setAttribute("id", "addBtn");
                inBoxDiv2.append(prodTitle, prodPrice, details, addBtn);

                box.setAttribute("class", "prodBox");
                box.append(inBoxDiv1, inBoxDiv2);
                productsSlider.append(box);
             });

             productsSlider.setAttribute("id","productsSlider");
             prodPage.appendChild(productsSlider);

             function checkIfAdded(item, cartData){
    for(i=0; i<cartData.length; i++){
        if(cartData[i]===item){
            return true;
        }
    }
}
cartData = JSON.parse(localStorage.getItem("cartData")) || [];

function addToCart(index){
    var isPresent = false;
    cartData.map(function(element){
        if(extraProd[index]===element){
            isPresent = true;
        }
    });
    if(isPresent){
        alert("The Product Is Already In Cart. You Can Increase Its Quantity There. Click Ok to go In Cart");
        window.location.href = "cart.html";
    }else{
    extraProd[index].quantity = 1;
    cartData.push(extraProd[index]);
    
    alert("The Product Is Successfully Added In Cart");
    localStorage.setItem("cartData", JSON.stringify(cartData));
    }
    
}