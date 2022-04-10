let time = document.getElementById('timer');
currentTime = time.textContent;

let a = setInterval(() => {
    
    if (currentTime >= 1){
        time.textContent = currentTime -= 1;
    }
    else {
        clearInterval(a);
        alert('Вы победили в конкурсе!');
    }
}, 1000);   

