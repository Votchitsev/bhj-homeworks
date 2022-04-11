let time = document.getElementById('timer');
currentTime = time.textContent;

let timer = setInterval(() => {
    
    if (currentTime >= 1){
        time.textContent = currentTime -= 1;
    }
    else {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
    }
}, 1000);   

