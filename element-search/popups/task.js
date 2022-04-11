const popup = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const close = document.querySelectorAll('.modal__close');
const showSuccess = popup.getElementsByClassName('show-success');

popup.className = 'modal modal_active';

for (let i = 0; i < close.length; i++) {
    close.item(i).onclick = () => {
        close.item(i).closest('.modal').className = 'modal';
    }
}

for (let i = 0; i < showSuccess.length; i++) {
    showSuccess.item(i).onclick = () => {
        modalSuccess.className = "modal modal_active";
        popup.className = "modal";
    }
}
