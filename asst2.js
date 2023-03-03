console.log("asst2");

// step 1: create the function

function productName(){
    console.log("Info");
} 
function subTotal(){
    console.log("Subtotal");
} 
function total(){
    console.log("Final Price");
}
function finalPrice(){
    console.log("Final Price");
}  
// step 2: Call the function

productName();
subTotal();
finalPrice();
function finalPrice(subtotal, taxes){
    console.log(subtotal+(subtotal*.08));
}
finalPrice(3,8);
