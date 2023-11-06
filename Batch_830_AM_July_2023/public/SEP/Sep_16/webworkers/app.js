var count = 1;
var loadBlocks= () => {
    setInterval(() => {
        var divTag = document.createElement("div");
        // divTag.setAttribute("class", "block")
        divTag.classList.add("block");
        divTag.innerHTML = "Block - " + count;
        document.querySelector(".container").append(divTag);
        count++;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {

    var myworker = new Worker("workers/dateworker.js");
    myworker.onmessage = (event) => {
        document.querySelector(".datecontainer").innerHTML = event.data;
    }

    // var myworker2 = new Worker(",,")

    loadBlocks();
    showDate();
});

var showDate = () => {
    var cDate = new Date();
    
}