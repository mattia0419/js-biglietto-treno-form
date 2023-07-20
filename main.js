const kmeters = document.getElementById("km-input");
const age = document.getElementById("select-age");

const sendButton = document.getElementById("button-price");
sendButton.addEventListener("click", function(){
    const userKm = parseFloat(kmeters.value);
    let price = userKm * 0.21 ;
    
    if(age.value == 1){
        price += - price * 20 / 100 ;
    }
    else if(age.value == 2){
        price;
    }
    else if(age.value == 3){
        price += - price * 40 / 100 ;
    }
    const final_price = price.toFixed(2) + "€";
    const final_price_text = `${final_price}`
    document.getElementById("ticket_price-1").innerHTML = final_price_text
    
    
    
    
})
