var forecastTemp = [24, 18, 27, 19, 21, 16, 26, 21]

var tempElementArray = document.querySelectorAll(".temp")

var unitInitial = document.getElementById("select").value

var cookieJar = document.getElementById("cookies")

function changeCity(){
    alert("Changing city")
}

function acceptCookie(){
    cookieJar.remove()
}

function populate(){

    for (var i = 0; i < tempElementArray.length; i++){
        tempElementArray[i].innerHTML = forecastTemp[i] + "&deg;"
    }
}

function celFar(input, unit){
    if (unit === "c"){ //convert from celcius to fahrenheit
        var output = (input * 9/5) + 32
    }
    else{
        var output = (input - 32) * 5/9
    }
    return Math.round(output)
}

function celK(input, unit){
    if (unit == "c"){
        var output = input + 273.15
    }
    else{
        var output = input - 273.15
    }
    return Math.round(output)
}

function ranF(input, unit){
    if (unit === "f"){
        var output = 459.67 + input
    }
    else{
        var output = input - 459.67
    }
    return Math.round(output)
}

function getUnitInitial(element){
    unitInitial = element.value
}

// Takes the initial unit and converts to C
function initTemp(input, unit){
    var output
    if (unit === "f"){
        //console.log("Converting f to c")
        output = celFar(input, "f")
    }
    else if (unit === "r"){
        //console.log("Converting rankine to cel")
        var x = ranF(input, unit)
        output = celFar(x, "f")
    }
    else if (unit === "k"){
        //console.log("Converting kel to cel")
        output = celK(input, "k")
    }
    else{
        output = input
    }
    return output
}

function convert(element){
    //console.log(typeof element.value) # String
    var unitTarget = element.value
    for (var i =0; i< forecastTemp.length; i++){
        forecastTemp[i] = initTemp(forecastTemp[i], unitInitial)
    }
    if (unitTarget === "f"){
        for (var i =0; i< forecastTemp.length; i++){
            forecastTemp[i] = celFar(forecastTemp[i], "c")
        }
    }

    else if (unitTarget === "k"){
        for (var i =0; i< forecastTemp.length; i++){
            forecastTemp[i] = celK(forecastTemp[i], "c")
        }
    }

    else if (unitTarget === "r"){
        for (var i =0; i< forecastTemp.length; i++){
            forecastTemp[i] = ranF(celFar(forecastTemp[i], "c"),  "f")
        }
    }


    populate()
    

}
