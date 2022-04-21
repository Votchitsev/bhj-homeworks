const widget = document.querySelector('.chat-widget');
const input = document.querySelector('#chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const robotAnswers = [
    'Здравствуйте, сегодня мы не работаем.',
    'Обед, не видите!',
    'Извините, но нам лень...',
]


widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active');
});

window.addEventListener('keyup', (event) => {
    
    if (event.key == 'Enter' && input.value.length > 0){
        messages.innerHTML += `<div class="message message_client">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${input.value}!</div>
    </div>`
        setTimeout(() => {
            messages.innerHTML += `<div class="message">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">${robotAnswer()}!</div>
        </div>`
        }, 2000);
        input.value = '';
    };
})


function getCurrentTime () {
    let now = new Date();
        let option = {
            hour: 'numeric',
            minute: 'numeric',
        }
        return now.toLocaleString("ru", option);
}

function robotAnswer () {

    return robotAnswers[Math.floor(Math.random() * (robotAnswers.length))];

}