let comp_score=0;
let user_score=0;
let stone=document.querySelector(".stone");
let paper=document.querySelector(".paper");
let scissors=document.querySelector(".scissors");
let btn=document.querySelector("button");
let scu=document.querySelector("#userscore");
let scc=document.querySelector("#compscore");
let result=document.querySelector("#msg");
let resultbox=document.querySelector(".start");
let up=document.querySelector(".userpic");
let cp=document.querySelector(".comppic");


const generatecomputerChoice =() =>{
let ch=Math.floor(Math.random()*3);
if(ch===0){
    cp.style.backgroundImage="url('rock.png')";
}else if(ch===1){
    cp.style.backgroundImage="url('paper.png')";
}else{
    cp.style.backgroundImage="url('scissors.png')";
}

return ch;

}
stone.addEventListener("click",()=>{
    up.style.backgroundImage="url('rock.png')";
    const compChoice=generatecomputerChoice();
    if(compChoice===0){
        result.innerText="draw";
        resultbox.style.backgroundColor=" rgb(30, 22, 43)";
        scc.innerText=comp_score;
        scu.innerText=user_score;
        
        
    }else if(compChoice===1){
        comp_score++;
        scc.innerText=comp_score;
        scu.innerText=user_score;
        result.innerText="You lose !!";
        resultbox.style.backgroundColor="red";
    }else{
        user_score++;
        result.innerText="You Win !!";
        resultbox.style.backgroundColor="green";
        scc.innerText=comp_score;
        scu.innerText=user_score;
    }
})
paper.addEventListener("click",()=>{
    up.style.backgroundImage="url('paper.png')";
    const compChoice=generatecomputerChoice();
    if(compChoice===0){
        user_score++;
        result.innerText="You Win !!";
        resultbox.style.backgroundColor="green";
        scc.innerText=comp_score;
        scu.innerText=user_score;
    }else if(compChoice===1){
        result.innerText="draw";
        resultbox.style.backgroundColor=" rgb(30, 22, 43)";
        scc.innerText=comp_score;
        scu.innerText=user_score;
    }else{
        comp_score++;
        result.innerText="You lose !!";
        resultbox.style.backgroundColor="red";
        scc.innerText=comp_score;
        scu.innerText=user_score;
    }
})
scissors.addEventListener("click",()=>{
    up.style.backgroundImage="url('scissors.png')";
    const compChoice=generatecomputerChoice();
    if(compChoice===0){
        comp_score++;
        result.innerText="You lose !!";
        resultbox.style.backgroundColor="red";
        scc.innerText=comp_score;
        scu.innerText=user_score;
    }else if(compChoice===1){
        user_score++;
        result.innerText="You Win !!";
        resultbox.style.backgroundColor="green";
        scc.innerText=comp_score;
        scu.innerText=user_score;
    }else{
        result.innerText="draw";
        resultbox.style.backgroundColor=" rgb(30, 22, 43)";
        scc.innerText=comp_score;
        scu.innerText=user_score;
    }
})