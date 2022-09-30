
var allBoxes = [...document.querySelectorAll(".box")];
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var startBtn = document.getElementById("startBtn");
var reloadBtn = document.getElementById("reloadBtn");
var option = "X";

var players =[];
 

function checkWinner(opt) {
    if (allBoxes[0].innerText == opt && allBoxes[1].innerText == opt && allBoxes[2].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[0].innerText == opt && allBoxes[4].innerText == opt && allBoxes[8].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[0].innerText == opt && allBoxes[3].innerText == opt && allBoxes[6].innerText == opt) {
        alert('Winner Is:' + getWinner(opt));
    } else if (allBoxes[1].innerText == opt && allBoxes[4].innerText == opt && allBoxes[7].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[2].innerText == opt && allBoxes[5].innerText == opt && allBoxes[8].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[6].innerText == opt && allBoxes[7].innerText == opt && allBoxes[8].innerText == opt) {
        alert('Winner Is: '+ getWinner(opt));
    } else if (allBoxes[3].innerText == opt && allBoxes[4].innerText == opt && allBoxes[5].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[2].innerText == opt && allBoxes[4].innerText == opt && allBoxes[6].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else {
        var count = 0;
        allBoxes.forEach((box, i) => {
            if (box.innerText != "") {
                count++;
            }
            if (count == 9) {
                alert("Game Over (Tie)")
            }
        })
    }
}
function getWinner(opt) {
    allBoxes.forEach(box => {
        box.disabled = true;
    })
    return players.filter(o => o.option == opt)[0].name;
}

function startGame(){
    players = [
        {
            name:player1.value ,
            option:"X"
        },
        {
            name:player2.value ,
            option:"O"
        }
    ]

    player1.disabled = true;
    player2.disabled = true;
    startBtn.disabled = true;
    reloadBtn.disabled = false;
    allBoxes.forEach(box =>{
        box.addEventListener("click", function(event){
            event.target.disabled = true;
            event.target.innerText = option;
            checkWinner(option);
            if(option == "X"){
                option = "O";
            }else{
                option = "X";
            }

           
        })
    })
    
    
}

function reload(){
    location.reload();
}
doneBtn.addEventListener(`click` function(){
if(input.value == ""){
    alert("enter image url")
}
})