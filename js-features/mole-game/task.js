const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let score = 0;
let lose = 0;

const holeList = document.getElementsByClassName("hole");

for (let i = 0; i < holeList.length; i++) {
    holeList.item(i).addEventListener('click', () => {
        if (holeList.item(i).className == 'hole hole_has-mole') {
            score += 1;
            dead.textContent = score;
        }
        else {
            lose += 1;
            lost.textContent = lose;
        };
    })
}
