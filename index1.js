//need onchange option with drop down menu with 3 options all items, only purchased items, only remaining items


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
btn = document.createElement("ul") 
btn.innerHTML = item+"<br>" ; //inner.HTML button = user input item
btn.class = "btnClass" 
btn.id ="btn1"
btn.onclick= function() {strikeOut(this)} //calling strikeout function on click for each button created 
document.body.appendChild(btn) //appending btns to body might change to make more organized if possible
  }
  }

  let cart = []
  function strikeOut(x){ //x refering to this, this referring to userinput
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
    cart1 = document.getElementById("cart")//reffering to element in html 
    cart1.innerHTML = ""
    for(i = 0; i < cart.length; i++){ //for loop to print cart items
      cart1.innerHTML = cart1.innerHTML + cart[i]+ "<br>"
    }
  }

  function viewItems(e){
    if(e === '1'){
      for(i = 0; i< userInput.length; i++){
        

      }
    }
  }