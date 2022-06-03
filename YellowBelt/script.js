var cookiePop = document.getElementById("cookies")
var imgNumber = 1

// When the button is clicked the 
// function removes the whole row of "cookies"
function acceptCookie(){
    cookiePop.remove()
}

// When the function is called the alert will pop up with the text
function cartAlert(){
    alert("Your Cart is empty")
}

function change(element){
    element.src = "./assets/succulents-2.jpg"
}
function changeBack(element){
    element.src = "./assets/succulents-1.jpg"
}