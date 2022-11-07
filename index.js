//probably better ways to organize instead of appending buttons to body might be able to make them <p> or <ul> so they appear cleaner 
//buttons being made from item are being moved when items are added or removed from cart due to div margins possibly might need to change what the cart items are being put into as well
//figure out how to design buttons to look nicer 
//seperate cart and grocery list
//relink to index.js instead of index1.js


let userInput = []
  function addItem(){
    for(i = 0; i<Infinity; i++){
    let item = prompt("What item do you want to add to the grocery list?").toLowerCase()
    if(userInput.indexOf(item, 0) === -1 ){
      userInput.push(item)
      alert("item has been added")
    }
    else {alert("item is already present")
    break;
}
console.log(userInput)
btn = document.createElement("button") 
btn.innerHTML = item+"<br>" ; //inner.HTML button = user input item
btn.class = "btnClass" 
btn.onclick= function() {strikeOut(this)} //calling strikout function on click for each button created 
document.body.appendChild(btn) //appending btns to body might change to make more organized if possible
  }
  }

  let cart = []
  function strikeOut(x){ //x refering to this
    if(x.classList.contains("class1")){  //checking if the user input has class which is line through 
      x.classList.remove("class1") //if it has class1 will remove
     y = cart.indexOf(x.innerHTML) //setting y to cart.indexof(x.innerhtml)which is whatever user input and was turned into button
      cart.splice(y,1)// removing from array if not in cart anymore meaning user wouldve unclicked to take out of list
      
    }
    else if(!x.classList.contains("class1")){//if user input does not have line through
      x.classList.add("class1") //add linethrough in css
      cart.push(x.innerHTML) //add to cart array
    }
    console.log(cart)
    cart1 = document.getElementById("cart")//reffering to div element in html 
    cart1.innerHTML = ""
    for(i = 0; i < cart.length; i++){ //for loop to print cart items
      cart1.innerHTML = cart1.innerHTML + cart[i]+ "<br>"
    }
  }
