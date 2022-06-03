var output = ""
var iterations = 100

for (var i = 1; i <= iterations; i++){
    output = ""
    if (i % 3 == 0){
        output += "Fizz"
    }
    if (i % 5 == 0){
        output += "Buzz"
    }
    if (output === ""){
        output = i
    }
    console.log(output)
}
