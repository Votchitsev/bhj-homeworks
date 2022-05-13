const popup = document.getElementById('subscribe-modal');
const popupCloseBtn = document.querySelector('.modal__close');

console.log(document.cookie);

window.onload = () => {
    console.log(getCookie('isClosed'))
    if (getCookie('isClosed') !== 'true') {
        setTimeout(() => {
        popup.classList.add('modal_active');
        }, 2000);
        return;
    }       

    return;

}

popupCloseBtn.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie = 'isClosed=true; max-age=360; samesite=strict; path=/'
});

function getCookie(name) {
    cookieName = name + '=';
    cookieArray = document.cookie.split('; ');

    let result;

    cookieArray.forEach(element => {
     
        if (element.indexOf(name) === 0) {
            result = element.substring(name.length + 1);
        }
    });

    return result;
}