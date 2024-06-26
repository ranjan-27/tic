let box = document.querySelectorAll(".b");
let resetb = document.querySelector("#q");
let newGame=document.querySelector("#new");
let msg=document.querySelector(".w");
let win=document.querySelector("#uo");
let turnO = true;
let winningPatterns = [   // how to declare array in js 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const restGame = () =>
    {
        turnO = true;
        enableBoxes();
        msg.classList.add("hide");
    };

box.forEach((b) => {
    b.addEventListener("click", () => {
        console.log("button was clicked");
       if(turnO){
        b.innerText="O";
        turnO=false;
       } 
       else{
        b.innerText="X";
        turnO=true;
       }
       b.disabled=true;

       checkWinner();
    });
});
const disableBoxes = () =>{
    for(let b of box){   // for each boxes we use for loop in which all boxes in array we treat likethis 
        b.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let b of box){  
        b.disabled=false;
        b.innerText="";
    }
}

const showWinner = (winner) => {
    win.innerText = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
};


const checkWinner= ()=>{
    for(pattern of winningPatterns){
      let pos1Val=box[pattern[0]].innerText;
      let pos2Val=box[pattern[1]].innerText;
      let pos3Val=box[pattern[2]].innerText;
      if(pos1Val!=="" && pos2Val!=="" && pos3Val!==""){
        if(pos1Val=== pos2Val&& pos2Val ===pos3Val){
          showWinner(pos1Val);
        }
      }
    }
}

newGame.addEventListener("click", restGame);
resetb.addEventListener("click",restGame);