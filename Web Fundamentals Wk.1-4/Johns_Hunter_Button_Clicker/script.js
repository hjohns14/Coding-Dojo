
function logout(element){
    if (element.innerText == "Logout"){
        element.innerText = "Login"
    }
    else{
        element.innerText = "Logout"
    }
    console.log("Login Clicked")
}

function removeButton(element){
    element.remove()
}

function likeAlert(element){
    var name = element.name
    var text = element.innerText.split(' ')
    console.log(text)
    var likes = parseInt(text[0])
    likes++
    element.innerText = likes + " likes"
    alert(`${name} was liked!`)
}