const popup = document.getElementById('subscribe-modal');
const popupCloseBtn = document.querySelector('.modal__close');

window.onload = () => {
    if (localStorage.getItem('isClosed') !== 'true') {
        setTimeout(() => {
            popup.classList.add('modal_active');
        }, 2000);
    }   
}

popupCloseBtn.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    localStorage.setItem('isClosed', 'true');
});
