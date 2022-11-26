const rURL = "https://raw.githubusercontent.com/derrickjs/ham-king/main/products.json"



var request = new XMLHttpRequest();



request.open("GET", rURL);
request.responseType = "json";


request.send();

request.onload = () => {
    classInfo(request.response);

}


var departments = ["Produce", "Bread", "Dairy", "Meat", "Seafood", "Drinks", "Deli", "Frozen"] ;


var onSale = ["Dairy" , "Bread" , "Meat", "Drinks", "Frozen" ];




function classInfo(data) {
    for( let d of data){
        document.querySelector(".parent").innerHTML += "<section class = 'child'>" + "<h1>" + d.product + "</h1> " + "<p>" + d.description + "</p>"+ "<img class  = 'image' src = " + d.image+"  width = 80% >" + "<div class = 'prices' >" + "<h2 class ='price'>Normal price"+ d.normal_price + "</h2>" + "<h2 class = 'salePrice'> Sale price" +d.sale_price + "</h2>" + "</div" + "</section>";
    }

   
}


// I am unsure how to get this function below to hide the non sale ads. I used this from the video but and unsure how to use it with the function I wrote above. 

const runAd = () => {
    for(var dept of departments ){
       

        if(!onSale.includes(dept)){
            document.querySelector("." + dept).classList.add("hide");
        }
    }
}

runAd();
