var displayElement = document.getElementById("display")
var op = ""
var prevNum
var clear = true 
function down(el){
    el.classList.add("light")
}
function up(el){
    el.classList.remove("light")
}




function press(int){
    var num = int

    if (displayElement.innerHTML == 0 || clear == true){
        displayElement.innerHTML = num
    }
    else{
        displayElement.innerHTML += num
    }
    clear = false

}

function setOP(input){
    prevNum = displayElement.innerHTML
    op = input
    clear = true
}

function calculate(){
    var result = 0
    if (op === "/"){
        result = prevNum /  displayElement.innerHTML
        console.log(prevNum, displayElement.innerHTML)
    }
    else if (op === "+"){
        result = displayElement.innerHTML + prevNum
    
    }
    else if (op === "-"){
        result = prevNum - displayElement.innerHTML 
    }
    else if (op === "*"){
        result = displayElement.innerHTML * prevNum
    }
    console.log(prevNum, displayElement.innerHTML)
    displayElement.innerHTML = Math.round(result * 100) / 100 
}

function clr(){
    displayElement.innerHTML = 0
    prevNum = 0
    clear = true
}