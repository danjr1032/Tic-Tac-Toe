let btnRef = document.querySelectorAll('.btn');
let popupRef = document.querySelector('.popup');
let newgameBtn = document.getElementById('new-Game');
let restartBtn = document.getElementById('restart');
let msgRef = document.getElementById('message');


let winningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
];

let xTurn = true; 
let count = 0;

const disableButtons = function(){
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
};


const winFunction = (element1) => {
    if (element1 =='X') {
        disableButtons();
        msgRef.innerHTML = 'X Wins';
        document.querySelector('.btn').style.backgroundcolor = 'orange'
    }
    else{
        disableButtons();
        msgRef.innerHTML = 'O Wins';
    }
};

const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = 'Its a draw';
};


const enableButtons = () => {
    btnRef.forEach(element => {
        element.innerHTML = '';
        element.disabled = false;
    });
    popupRef.classList.add('hide');
};

newgameBtn.addEventListener('click', () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener('click', () => {
    count = 0;
    enableButtons();
})


const winCheck = function(){
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
        btnRef[i[0]].innerHTML,
        btnRef[i[1]].innerHTML,
        btnRef[i[2]].innerHTML 
    ];

        if (element1 != '' && element2 != '' && element3 != '') {
            if (element1 === element2 && element2 === element3) {
                winFunction(element1);
            }
        }
    };
};


btnRef.forEach((element) => {
    element.addEventListener('click', () => {
        if (xTurn) {
            xTurn = false;
            element.innerHTML = 'X';
            element.disabled = true;
        }
        else{
            xTurn = true;
            element.innerHTML = 'O';
            element.disabled = true;

        }
        count +=1;
        if (count === 9) {
            //its draw
            drawFunction();
        }else{
       //check for win
        winCheck();
        }
    });
});
window.onload = enableButtons;