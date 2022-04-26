const taskInput = document.querySelector('#task__input');



taskInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        event.preventDefault();
    }
})


window.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.key == "Enter" && event.target.value) {
        createTask(event.target.value);
        event.target.value = '';
    }
})

function createTask(taskText) {
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `<div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a>`
    taskElement.classList.add('task');
    document.getElementById('tasks__list').append(taskElement);
    taskElement.querySelector('a').addEventListener ('click', (e) => {
        e.target.parentElement.remove();
    } );
}
