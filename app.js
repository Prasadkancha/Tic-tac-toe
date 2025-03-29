let boxes=document.querySelectorAll(".box");
let restart=document.querySelector("#reset_btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".message-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
const restartgame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",   () => {
        console.log("box was clicked");
        if(turnO){
            //player 0
            box.innerText="O";
            turnO=false;
        }else{
            //player x
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });  
});


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText=`congratulation, Winner ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=() =>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val===pos2val  &&pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};
newbtn.addEventListener("click",restartgame);
restart.addEventListener("click",restartgame);