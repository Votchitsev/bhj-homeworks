const signin = document.querySelector('.signin');
const form = document.querySelector('form');
const signinBtn = document.getElementById('signin__btn');
const login = form.querySelector('input[name="login"]');
const password = form.querySelector('input[name="password"]')
const welcomeDiv = document.querySelector('#welcome');
const userNumber = document.querySelector('#user_id');


signinBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('login', login.value);
    data.append('password', password.value);
    let response = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
        method: 'POST',
        body: data,
    });
    let result = await response.json();
    if (result.success == true) {
        localStorage.setItem('id', result.user_id);
        auth(result.user_id);
    } else {
        alert('Invalid username or password!');
    }
});

window.onload = () => {

    let user_id = localStorage.getItem('id');

    if (user_id) {
        auth(user_id);
    }
}

function auth (user_id) {
    welcomeDiv.classList.add('welcome_active');
    userNumber.textContent = user_id;
    signin.classList.remove('signin_active');
}
