const rURL = "https://raw.githubusercontent.com/derrickjs/ham-king/main/products.json"

var departments = ["Produce", "Bread", "Dairy", "Meat", "Seafood", "Drinks", "Deli", "Frozen"] ;
var onSale = ["Dairy" , "Bread" , "Meat", "Drinks", "Frozen" ];








const runAd = () => {
    for(var dept of departments ){

        document.querySelector(".parent").innerHTML += ` <section class = '${dept}'><h1 class='title'>${dept}</h1></section>`
        
       

        if(!onSale.includes(dept)){
            document.querySelector("." + dept).classList.add("hide");
        }
    }
}

runAd();

var request = new XMLHttpRequest();


request.open("GET", rURL);
request.responseType = "json";


request.send();

request.onload = () => {
    classInfo(request.response);

}


function classInfo(data) {
    for( let d of data){
        document.querySelector(`.${d.department}`).innerHTML += "<section class = 'child'> " + "<section class = 'grandchild'>" + "<h1>" + d.product + "</h1> " + "<p>" + d.description + "</p>"+ "<img class  = 'image' src = " + d.image+"  width = 80% >" + "<div class = 'prices' >" + "<h2 class ='price'>Normal price"+ d.normal_price + "</h2>" + "<h2 class = 'salePrice'> Sale price" +d.sale_price + "</h2>" + "</div" + "</section>"+"</section>";
    }

   
}
