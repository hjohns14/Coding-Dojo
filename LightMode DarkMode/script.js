const body = document.querySelector("body")

function changeMode(el){
    if (el.checked){
        body.style.backgroundColor = "#212121"
    }
    else{
        body.style.backgroundColor = "white"
    }
}