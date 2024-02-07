let box = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const newGameBtn = document.querySelector(".new-game-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const restart =()=>{
    turn0 = true;
    enable();
    msgContainer.classList.add("hide");
}
const newGame =()=>{
    turn0 = true;
    enable();
    msgContainer.classList.add("hide");
}



box.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(turn0===true){
            e.innerText="O";
            turn0=false;
        }
        else{
            e.innerText="X";
            turn0=true;
        }
        e.disabled = true;
        checkPattern();
    });
});

const disabled = ()=>{
    for(let i of box){
        i.disabled=true;
    }
}
const enable = ()=>{
    for(let i of box){
        i.disabled=false;
        i.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabled();
}

let checkPattern=()=>{
    for(let i of winPatterns){
        // console.log(i[0],i[1],i[2]);
        // console.log(box[i[0]].innerText,box[i[1]].innerText,box[i[2]].innerText);
        let pos1Val = box[i[0]].innerText;
        let pos2Val = box[i[1]].innerText;
        let pos3Val = box[i[2]].innerText;
        
        if((pos1Val && pos2Val && pos3Val) != ""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

reset.addEventListener("click",restart);
newGameBtn.addEventListener("click",newGame);