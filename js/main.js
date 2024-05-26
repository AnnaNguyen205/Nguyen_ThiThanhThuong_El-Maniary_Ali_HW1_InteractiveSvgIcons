console.log("JavaScript file connected");

const controlDivs = document.querySelectorAll("#big-container div");
console.log(controlDivs);

function logId() {
    console.log(this.id);
}

controlDivs.forEach(function(div){
    div.addEventListener("click", logId);
});

