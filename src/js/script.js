const currentPlayer = document.querySelector("#current-player");

let playerX = [];
let playerO = [];
let player = "x";
let old = 0;

let positions = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"]
];

function init() {
    player = "x";
    currentPlayer.innerHTML = `<i class="fa-solid fa-x"></i>`;
    playerX = [];
    playerO = [];
    old = 0;

    // console.log("playerX => ", playerX);
    // console.log("playerO => ", playerO);
    
    document.querySelectorAll('.moves').forEach((move) => {
        move.innerHTML = "";

        let newMove = move.cloneNode(true);
        move.parentNode.replaceChild(newMove, move);
        newMove.removeAttribute('disabled');

        newMove.addEventListener('click', () => {
    
            if (player == "x") {
                playerX.push(newMove.getAttribute('data-i'));
            } else if (player == "o") {
                playerO.push(newMove.getAttribute('data-i'));
            }

            newMove.setAttribute('disabled', '');
    
            togglePlayer(newMove);
            checkVictory();
        });
    });
}

init();

function togglePlayer(move) {
    if (player == 'x') {
        player = 'o';
        currentPlayer.innerHTML = `<i class="fa-regular fa-circle"></i>`;
        move.innerHTML = `<i class="fa-solid fa-x move"></i>`;
    } else if (player == 'o') {
        player = 'x';
        currentPlayer.innerHTML = `<i class="fa-solid fa-x"></i>`;
        move.innerHTML = `<i class="fa-regular fa-circle move"></i>`;
    }

    // console.log(player);
}

function oldCheck() {
    old++;
    
    if (old == 9) {
        alert('Empate!');
        old = 0;
        init();
    }
    
    console.log("old => ", old);
}

function checkVictory() {
    oldCheck();
    positions.forEach((position) => {
        if (position.length <= playerX.length || position.length <= playerO.length) {
            // console.log(position.every(value => playerX.includes(value)));
            if (position.every(value => playerX.includes(value))) {
                alert('X ganhou');
                init();
            } else if (position.every(value => playerO.includes(value))) {
                alert('◯ ganhou');
                init();
            }
        }
    });
}
