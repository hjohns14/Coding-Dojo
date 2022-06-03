const connectionRequestsElement = document.getElementById("connection-requests")
const yourConnectionsElement = document.getElementById("connections")

var connectionRequests = parseInt(connectionRequestsElement.innerText)
var yourConnections = parseInt(yourConnectionsElement.innerText)

function accept(id){
    var element = document.getElementById(id)
    var connectionElement = document.querySelector(".connections .card-body")

    // add connection request to your connections if accepted
    connectionElement.innerHTML += '<div class="nameplate"> <img src="./assets/user-circle.png" alt="User Circle">' + 
    '<h3 class="name">' + id +'</h3> </div>'
    
    // increase connections and decrease requests
    connectionRequests--
    yourConnections ++

    // update innerText of each item
    connectionRequestsElement.innerText = connectionRequests
    yourConnectionsElement.innerText = yourConnections
    element.remove()
}

function deny(id){
    var element = document.getElementById(id)
    connectionRequests--
    connectionRequestsElement.innerText = connectionRequests
    element.remove()
}

function changeName(){
    var userNameElement = document.getElementById("user-name")
    userNameElement.innerText = "any other name"
}