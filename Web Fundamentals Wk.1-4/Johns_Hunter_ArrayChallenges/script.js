function alwaysHungry(arr) {
    var hungry = true
    for (i in arr){
        if(arr[i] === "food"){
            hungry = false
            console.log("yummy")
        }
    }
    if (hungry){
        console.log("Im Hungry")
    }
        
    
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i in arr){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (i in arr){
        sum += arr[i]
    }
    var average = sum / arr.length
    var count = 0
    // count how many values are greated than the average
    for (i in arr){
        if (arr[i] > average){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    
    while (fibArr.length < n){
        var len = fibArr.length
        fibArr.push(fibArr[len-1] + fibArr[len-2])
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
