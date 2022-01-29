var rightDiv = document.querySelector('.rightDiv');
var address = document.querySelector("#address");



cartData = JSON.parse(localStorage.getItem("cartData")) || [
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
        },
        quantity:1
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
            
        },
        quantity:2
    }
    ];

    var addressObj = JSON.parse(localStorage.getItem("address"));

    var headAdd = document.createElement("h4");
    var p = document.createElement("p");

    p.innerHTML = addressObj.name+"<br>"+addressObj.add1+"<br>"+addressObj.city+"<br>"+addressObj.state+"-"+addressObj.pincode+"<br>"+addressObj.contact;
    headAdd.innerHTML = "Address"

    address.append(headAdd, p);

showData(cartData);
function showData(cartData){
        
            rightDiv.innerHTML = "";
    
            //creating elements of rightDiv.
            var orderSummaryDiv = document.createElement("div");
            var proceedBtn = document.createElement("button");
            var noteText = document.createElement("p");

            var totalSum = 0;
            cartData.map(function(element, index) {
                //calculating totalSum
                totalSum += element.price*element.quantity;
            });
            
            //additional note
            noteText.innerHTML = "<i>Estimated Delivery: Within 4-5 Days</i>";
            rightDiv.append(noteText);


            

       
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
                var finalCheckOutValue = totalSum*0.7 + 15;
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
            proceedBtn.textContent = "PLace Order & Pay";
            proceedBtn.setAttribute("id", "proceedBtn");
            proceedBtn.addEventListener("click", function(){
                window.location.href = "orderSuccess.html"
            })
            rightDiv.append(proceedBtn);
}




//navBar Js 
document.getElementById("navLocation").addEventListener("click", function(){
    window.location.href = "#locationSelector";
})