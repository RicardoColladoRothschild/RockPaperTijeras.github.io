let jugador;
let pc;
let counter = 0;
let playerPoints = 0;
let pcPoints = 0;


function playerTouchTijeras(){
    jugador = "tijeras";
    pc = pcPlay();
    comparePlays(pc,jugador);
    
}

function playeTouchRock(){
    jugador = "rock";
    pc = pcPlay();
    comparePlays(pc,jugador);
      
}

function playeTouchPaper(){
    jugador="paper";
    pc = pcPlay();
    comparePlays(pc,jugador);
   
}


function pcPlay(){
    let n = Math.floor(Math.random() * 4);
        if(n==0){
            return "tijeras";
        }else if(n==1){
            return "paper";

        }else if(n==2){
            return "rock";
        }
       
        
}

function restart(){
    counter = 0;
    playerPoints = 0;
    pcPoints = 0;
    document.getElementById("show_a_Winner").innerHTML = "";

}

function comparePlays(pc,player){

    if((pc==="tijeras") && (player==="rock")){
        playerPoints+=1;
        counter+=1;
        document.getElementById("show_a_Winner").innerHTML = "Winner is Player, played Rock / Pc Played Scissors";
        //alert("Points to Player, pc plays->Tijeras");
    }else if((pc==="rock") && (player==="tijeras")){
        pcPoints+=1;
        counter+=1;
        document.getElementById("show_a_Winner").innerHTML = "Winner is PC, played Rock /  Player played Scissors";
        //alert("Points to Pc, pc plays->Rock");
    }else if((pc==="paper") && (player==="tijeras")){
        playerPoints+=1;
        counter+=1;
        document.getElementById("show_a_Winner").innerHTML = "Winner is Player, played Scissors /  Pc Played Paper";
        //alert("Points to player, pc plays->Paper");
    }else if((pc==="tijeras") && (player==="paper")){
        pcPoints+=1;
        counter+=1;
        document.getElementById("show_a_Winner").innerHTML = "Winner is PC, played Scissors/  Player played Paper";
       // alert("Points to Pc, pc plays->Tijeras");
    }else if((pc==="rock") && (player==="paper")){
        playerPoints+=1;
        counter+=1;
        document.getElementById("show_a_Winner").innerHTML = "Winner is Player, played paper / Pc Rock";
        //alert("Points to Player, pc plays->Rock");
    }else if((pc==="paper") && (player==="rock")){
        pcPoints+=1;
        counter+=1;
        document.getElementById("show_a_Winner").innerHTML = "Winner is PC, played Paper/  Player played Rock";
        //alert("Points to Pc, pc plays->Paper");
    }else if((pc==="rock") && (player==="rock")){
        
        counter+=1;
        document.getElementById("show_a_Winner").innerHTML = "Was a Draw";
        //alert("Is A Draw, pc plays->Rock");
    }
    else if((pc==="paper") && (player==="paper")){
        
        counter+=1;
        document.getElementById("show_a_Winner").innerHTML = "Was a Draw";
        //alert("Is A Draw, pc plays->Paper");
    }else if((pc==="tijera") && (player==="tijera")){
        
        counter+=1;
        document.getElementById("show_a_Winner").innerHTML = "Was a Draw";
        //alert("Is A Draw, pc plays->Tijeras");
    }
    
}

