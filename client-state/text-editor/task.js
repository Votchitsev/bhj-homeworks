const input = document.querySelector('textarea');

window.onload = () => {
    input.textContent = localStorage.getItem('value');
}

window.onunload = () => {
    localStorage.setItem('value', input.value);
}
