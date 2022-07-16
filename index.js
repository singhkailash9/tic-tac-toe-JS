let gameover = new Audio("gameover.wav");
let turn = "X";
let isgameover = false;
let loopcontrol = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    wins = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".infotext").innerText = boxtext[e[0]].innerText + " Won"
            document.querySelector(".infotext").classList.add("styletext")
            isgameover = true;
            loopcontrol = true;
            gameover.play();
        }
    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (!isgameover) {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                turn = changeTurn();
                checkWin();
            }
        }
        if (!loopcontrol) {
            document.getElementsByClassName("infotext")[0].innerText = turn + "'s turn";
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    document.querySelector(".infotext").classList.remove("styletext")
    isgameover = false;
    document.getElementsByClassName("infotext")[0].innerText = turn + "'s turn";
})