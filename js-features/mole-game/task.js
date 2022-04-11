const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let score = 0;
let lose = 0;
dead.textContent = 0;
lost.textContent = 0;

const holeList = document.getElementsByClassName("hole");

for (let i = 0; i < holeList.length; i++) {
    holeList.item(i).addEventListener('click', () => {
        if (holeList.item(i).className == 'hole hole_has-mole') {
            score += 1;
            dead.textContent = score;
            if (score == 10) {
                alert('Поздравляем! Вы выиграли!');
                dead.textContent = 0;
                score = 0;
                lost.textContent = 0;
                lose = 0;

            }
        }
        else {
            lose += 1;
            lost.textContent = lose;
            if (lose == 5) {
                alert('Увы... Вы проиграли.')
                dead.textContent = 0;
                score = 0;
                lost.textContent = 0;
                lose = 0;
            }
        };
    })
}
