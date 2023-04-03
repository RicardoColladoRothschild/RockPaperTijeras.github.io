let jugador;
let pc;
let counter;
let playerPoints;
let pcPoints;

function playerTouchTijeras(){
    jugador = "tijeras";
    pc = pcPlay();
    alert(`Player choice: ${jugador}`);
}

function playeTouchRock(){
    jugador = "rock";
    pc = pcPlay();
        alert(`Player choice: ${jugador}`);
}

function playeTouchPaper(){
    jugador="paper";
    pc = pcPlay();
    alert(`Player choice: ${jugador}`);
}


function pcPlay(){
    let n = Math.random() * 3;
        if(n===0){
            return "tijeras";
        }else if(n===1){
            return "paper";

        }else if(n===2){
            return "rock";
        }
     return "rock";   
        
}

function restart(){
    counter = 0;
    playerPoints = 0;
    pcPoints = 0;

}

