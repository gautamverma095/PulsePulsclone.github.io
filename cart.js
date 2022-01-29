var container = document.getElementById('container');
cartData = JSON.parse(localStorage.getItem("cartData")) || [];

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

showCartData(cartData, extraProd);
function showCartData(cartData, extraProd){
        
            container.innerHTML = "";
    
        if(cartData.length===0){
            //if elements is not present in cartData then do this.
            var bgImage = document.createElement("img");
            var bgImageDiv = document.createElement("div");
            var btn1 = document.createElement("button");
            var btn2 = document.createElement("button");

            //setting bgImageDiv
            bgImage.setAttribute("src", "https://www.pulseplus.in/content/images/icons/cart-empty.png");
            bgImageDiv.setAttribute("id","bgImageDiv");

            btn1.textContent = "ADD MEDICINES";
            btn1.addEventListener("click",function(){
                window.location.href = "ProductPage.html"
            });

            btn2.textContent = "MY ORDERS";
            btn2.addEventListener("click",function(){
                window.location.href = "order.html"
            })

            
            bgImageDiv.append(bgImage, btn1, btn2);
            container.append(bgImageDiv);
        }else{

            //If elements are present in cart then do this

            //creating html elements and then declaring variables.  

            //creating heading for page.
            var pageHeading = document.createElement("h2");
            
            //creating main div to show data.
            var mainDiv = document.createElement("div");

            //creating left div.
            var leftDiv = document.createElement("div");
            //creating elements of leftDiv.
            var cartProducts = document.createElement("div");
            var addMedicineBtn = document.createElement("button");
            var productsSlider = document.createElement("div");

            //creating right div.
            var rightDiv = document.createElement("div");
            //creating elements of rightDiv.
            var freeOrderBtn = document.createElement("button");
            var applyCouponBtn = document.createElement("button"); 
            var orderSummaryDiv = document.createElement("div");
            var proceedBtn = document.createElement("button");

            //setting values to the above declare variables.
            pageHeading.innerHTML = "Cart";

            //showing all the products present in the cart in leftDiv part.

            var totalSum = 0;
            cartData.map(function(element, index) {

                //calculating totalSum
                totalSum += +element.price*+element.quantity;

                var row = document.createElement("div");

                var firstDiv = document.createElement("div");
                var prodImg = document.createElement("img");

                var secondDiv = document.createElement("div");
                var title = document.createElement("p");
                var divUnderSecondDiv = document.createElement("div");
                var price = document.createElement("p");
                var deleteBtn = document.createElement("button");

                var thirdDiv = document.createElement("div");
                var divUnderThirdDiv = document.createElement("div");
                var increaseQty = document.createElement("div");
                var quantity = document.createElement("p");
                var decreaseQty = document.createElement("div")
                var finalPrice = document.createElement("p");

                //setting up first div
                prodImg.setAttribute("src", element.imgs);
                firstDiv.appendChild(prodImg);
                firstDiv.setAttribute("class", "firstDiv");

                //setting up second div
                title.textContent = element.name;
                divUnderSecondDiv.setAttribute("class", "priceAndButtonDiv");
                price.textContent = "₹ " + element.price;
                deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
                deleteBtn.setAttribute("class", "deleteBtn");
                deleteBtn.addEventListener("click", function(){
                    deleteFromCart(index);
                });
                divUnderSecondDiv.append(price, deleteBtn);
                secondDiv.append(title, divUnderSecondDiv);
                secondDiv.setAttribute("class","secondDiv");

                //setting up third div
                increaseQty.textContent = "+";
                increaseQty.setAttribute("class", "increaseQty");
                quantity.textContent = element.quantity;
                decreaseQty.textContent = "-";
                decreaseQty.setAttribute("class","decreaseQty");
                increaseQty.addEventListener("click", function(){
                    increaseQuantity(index);
                });
                decreaseQty.addEventListener("click", function(){
                    decreaseQuantity(index);
                });
                divUnderThirdDiv.setAttribute("class", "divUnderThirdDiv");
                divUnderThirdDiv.append(decreaseQty, quantity, increaseQty);
                finalPrice.textContent = "₹ " +  element.price*element.quantity + " only";
                thirdDiv.append(divUnderThirdDiv, finalPrice);
                thirdDiv.setAttribute("class","thirdDiv");

                //appending Elements.
                row.setAttribute("class", "cartRow");
                row.append(firstDiv, secondDiv, thirdDiv);
                cartProducts.append(row);
            });

            //setting up classes & Ids to the elements to provide css.
            cartProducts.setAttribute("class", "cartProducts")
            leftDiv.setAttribute("class", "leftDiv");
            rightDiv.setAttribute("class", "rightDiv");
            mainDiv.setAttribute("id","mainDiv");

            //add Medicines button,
            addMedicineBtn.textContent = "+ Add Medicines";
            addMedicineBtn.addEventListener("click", function(){
                window.location.href = "ProductPage.html"
            });
            addMedicineBtn.setAttribute("id", "addMedicineBtn")
            
            //add more product to cart wala section.
             extraProd.map(function(element, index){
                var box = document.createElement("div");
                var inBoxDiv1 = document.createElement("div");
                var prodImage = document.createElement("img");
                var inBoxDiv2 = document.createElement("div");
                var prodTitle = document.createElement("p");
                var prodPrice = document.createElement("p");
                var addBtn = document.createElement("button");

                prodImage.setAttribute("src", element.imgs);
                inBoxDiv1.appendChild(prodImage);

                prodTitle.textContent = element.name;
                prodPrice.textContent = "₹ " + element.price;
                addBtn.textContent = "+ ADD";
                addBtn.addEventListener("click", function(){
                    addToCart(index);
                });
                addBtn.setAttribute("id", "addBtn");
                inBoxDiv2.append(prodTitle, prodPrice, addBtn);

                box.setAttribute("class", "prodBox");
                box.append(inBoxDiv1, inBoxDiv2);
                productsSlider.append(box);
             });

             productsSlider.setAttribute("id","productsSlider");

            

            //left div ends here now right Div is starting from here.
            //freeOrderBtn
            if(totalSum<=1000){
                freeOrderBtn.innerHTML = "Free For Orders Above 1000 >"
                freeOrderBtn.addEventListener("click", function(){
                    window.location.href = "#";
                })
                freeOrderBtn.setAttribute("id", "freeOrderBtn");
                rightDiv.append(freeOrderBtn);
            }
            

            //applyCouponBtn
            applyCouponBtn.innerHTML = '<img src="https://www.pulseplus.in/content/images/icons/sale.png"/><p>Apply Coupon</p>';
            applyCouponBtn.addEventListener("click", function(){
                //code for applyCouponBtn
                var couponCode = prompt("Please Put Coupon Code Here And Click on Ok");
                if(couponCode=="masai30"){
                    localStorage.setItem("couponCode", couponCode);
                    showCartData(cartData, extraProd);
                }else{
                    alert("Coupon Code Is Not Valid")
                }
            });
            applyCouponBtn.setAttribute("id", "applyCouponBtn");
            rightDiv.append(applyCouponBtn);

            //orderSummaryDiv
           
            var table = document.createElement("table");
            var thead = document.createElement("thead");
            var tr1 = document.createElement("tr");
            var th11 = document.createElement("td");
            var tbody = document.createElement("tbody");
            var tr2 = document.createElement("tr");
            var td21 =  document.createElement("td");
            var td22 = document.createElement("td");
            var tr3 = document.createElement("tr");
            var td31 = document.createElement("td");
            var td32 = document.createElement("td");
            var tr4 = document.createElement("tr");
            var td41 = document.createElement("td");
            var td42 = document.createElement("td");
            var tr5 = document.createElement("tr");
            var td51 = document.createElement("td");
            var td52 = document.createElement("td");
            
            if(localStorage.getItem("couponCode")!=="masai30"){
                var finalCheckOutValue = totalSum + 15;
                th11.innerHTML = "<b>Order Summary</b>";
                tr1.append(th11);
                thead.append(tr1);
                td21.innerHTML = "Items";
                td22.innerHTML = "₹ "+totalSum+".00";
                tr2.append(td21, td22);
                td31.innerHTML = "Processing Fee"
                td32.innerHTML = "₹ 15.00"
                tr3.append(td31, td32);
                td41.innerHTML = "<b>Total</b>";
                td42.innerHTML = "₹ "+finalCheckOutValue+".00";
                tr4.append(td41, td42);
                td51.innerHTML = "Discount Applied";
                td52.innerHTML = "0 %";
                tr5.append(td51, td52);
                tbody.append(tr2, tr3, tr5, tr4);
                table.append(thead, tbody);
                orderSummaryDiv.setAttribute("id","orderSummaryDiv")
                orderSummaryDiv.append(table);
                rightDiv.append(orderSummaryDiv);
            }else{
                var finalCheckOutValue = Math.floor(totalSum*0.7 + 15);
                th11.innerHTML = "<b>Order Summary</b>";
                tr1.append(th11);
                thead.append(tr1);
                td21.innerHTML = "Items";
                td22.innerHTML = "₹ "+(totalSum)+".00";
                tr2.append(td21, td22);
                td31.innerHTML = "Processing Fee"
                td32.innerHTML = "₹ 15.00"
                tr3.append(td31, td32);
                td41.innerHTML = "<b>Total</b>";
                td42.innerHTML = "₹ "+finalCheckOutValue+".00";
                tr4.append(td41, td42);
                td51.innerHTML = "Discount Applied";
                td52.innerHTML = "30 %";
                tr5.append(td51, td52);
                tbody.append(tr2, tr3, tr5, tr4);
                table.append(thead, tbody);
                orderSummaryDiv.setAttribute("id","orderSummaryDiv")
                orderSummaryDiv.append(table);
                rightDiv.append(orderSummaryDiv);
            }
            

            //proccedBtn
            proceedBtn.textContent = "PROCEED";
            proceedBtn.setAttribute("id", "proceedBtn");
            proceedBtn.addEventListener("click", function(){
                window.location.href = "deliverydetails.html"
            })
            rightDiv.append(proceedBtn);


             //appending sub parts to the main elements.
            leftDiv.append(cartProducts, addMedicineBtn, productsSlider);
            mainDiv.append(leftDiv, rightDiv);
            container.append(pageHeading, mainDiv);
        }
}
function checkIfAdded(item, cartData){
    for(i=0; i<cartData.length; i++){
        if(cartData[i]===item){
            return true;
        }
    }
}
function addToCart(index){
    var isPresent = false;
    cartData.map(function(element){
        if(extraProd[index]===element){
            isPresent = true;
        }
    });
    if(isPresent){
        alert("The Product Is Already In Cart. You Can Increase Its Quantity There.")
    }else{
    extraProd[index].quantity = 1;
    cartData.push(extraProd[index]);
    alert("The Product Is Successfully Added In Cart");
    localStorage.setItem("cartData", JSON.stringify(cartData));
    showCartData(cartData, extraProd);
    }
    
}


function increaseQuantity(index){
    cartData[index].quantity++;
    localStorage.setItem("cartData", JSON.stringify(cartData));
    showCartData(cartData, extraProd);
}

function decreaseQuantity(index){
    if(cartData[index].quantity<=0){
        deleteFromCart(index)
    }else{
        cartData[index].quantity--;
        localStorage.setItem("cartData", JSON.stringify(cartData));
        showCartData(cartData, extraProd);
    }
    
}

function deleteFromCart(index){
    //writ code to delete element from cart.
    cartData.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    showCartData(cartData, extraProd);
}




//navBar Js 
document.getElementById("navLocation").addEventListener("click", function(){
    window.location.href = "#locationSelector";
})