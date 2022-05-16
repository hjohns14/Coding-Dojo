var likeArray = [9, 12, 9]
var likeElements = document.querySelectorAll(".likes")
console.log(likeElements)
function addLike(i){
    likeArray[i]++
    likeElements[i].innerText = likeArray[i] + " Like(s)"
}