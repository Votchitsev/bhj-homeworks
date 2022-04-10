const clickerCounter = document.getElementById('clicker__counter');
const clickerImg = document.getElementById('cookie');

counter = 0;

clickerImg.addEventListener("mousedown", (() => {
    counter += 1;
    clickerCounter.textContent = counter;
    clickerImg.style.width = '250px';
}), false);

clickerImg.addEventListener("mouseup", () => {
    clickerImg.style.width = '200px';
}, false);