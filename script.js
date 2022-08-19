let isXPlay = true;
const boxes = document.querySelectorAll('.box');
const playerStatus = document.querySelector('#player');
const announcer = document.querySelector('#winner-announce');
const resultText = document.querySelector('#result');
let turnCount = 0;
boxes.forEach(box => {box.addEventListener('click', ClickBoxHandler)})

function ClickBoxHandler(e){
    if(e.currentTarget.classList.contains("clicked")){
        alert("Lütfen boş bir kutuyu seçiniz !");
    }
    else{
        if(isXPlay){
            e.currentTarget.innerText = "X"
            playerStatus.innerText = "O"
        }
        else{
            e.currentTarget.innerText = "O"
            playerStatus.innerText = "X"
        }
    
        e.currentTarget.classList.add("clicked");
        turnCount ++;
        isXPlay = !isXPlay;
        CheckResult();
    }
}

function CheckResult(){
    // Vertical Check
    for(let i = 0; i <= 2; i++ ){
        if(boxes[i].innerText != "" && boxes[i+3].innerText != "" && boxes[i+6].innerText != ""){
            if(boxes[i].innerText == boxes[i+3].innerText && boxes[i].innerText == boxes[i+6].innerText && boxes[i+3].innerText == boxes[i+6].innerText) PlayerWin();
        }
    }

    // Horizontal Check
    for(var i = 0; i <= 6; i += 3 ){
        if(boxes[i].innerText != "" && boxes[i+1].innerText != "" && boxes[i+2].innerText != ""){
            if(boxes[i].innerText == boxes[i+1].innerText && boxes[i].innerText == boxes[i+2].innerText && boxes[i+1].innerText == boxes[i+2].innerText) PlayerWin();
        }
    }

    // Cross Check
    if(boxes[0].innerText != "" && boxes[4].innerText != "" && boxes[8].innerText != ""){
        if(boxes[0].innerText == boxes[4].innerText && boxes[0].innerText == boxes[8].innerText && boxes[4].innerText == boxes[8].innerText) PlayerWin();
    }

    if(boxes[2].innerText != "" && boxes[4].innerText != "" && boxes[6].innerText != ""){
        if(boxes[2].innerText == boxes[4].innerText && boxes[2].innerText == boxes[6].innerText && boxes[4].innerText == boxes[6].innerText) PlayerWin();
    }

    if(turnCount == 9) GameOver();
}

function PlayerWin(){
    announcer.style.display = "flex";
    resultText.innerText = `Player ${isXPlay ? 'O' : 'X'} Wins`;
}

function GameOver(){
    announcer.style.display = "flex";
    resultText.innerText = 'Game DRAW';
}

