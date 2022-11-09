var departments = ["Produce", "Bread", "Dairy", "Meat", "Seafood", "Drinks", "Deli", "Frozen"] ;


var onSale = ["Dairy", "Bread", "Meat", "Drinks", "Frozen"];

const runAd = () => {
    for(var dept of departments ){
        document.querySelector(".parent").innerHTML +=  "<section class =' child " + dept + " '><h1>" + dept + " </h1><p>price goes here</p></section>"

        if(!onSale.includes(dept)){
            document.querySelector("." + dept).classList.add("hide");
        }
    }
}

runAd();