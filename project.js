let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg")
const userScorepara= document.querySelector("#user-score")
const compScorepara= document.querySelector("#comp-score")
const drawGame= ()=>{
    
    msg.innerText="Game Was draw. Play Again";
    msg.style.backgroundColor="#081b31";
    
}
const showWinner=(userWin)=>{
    if(userWin){
              userScore++;
              userScorepara.innerText=userScore;
        
        msg.innerText="You win";
        msg.style.backgroundColor="green";

    }else{
        compScore++;
              compScorepara.innerText=compScore;
        
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}
const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];


}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //Generate computer choice 
    const compChoice= gencompChoice();
    console.log("comp choice=",compChoice);
if(userChoice===compChoice){
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin= compChoice==="scissors"?false:true
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}


}
choices.forEach((choice)=>{
    
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})
