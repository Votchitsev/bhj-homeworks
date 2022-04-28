const taskInput = document.querySelector('#task__input');
const form = document.forms[0];


form.onsubmit = () => {
    if (taskInput.value.trim().length > 0) {
        createTask(taskInput.value);
        taskInput.value = '';
    } 
    return false;
}


function createTask(taskText) {
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `<div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a>`
    taskElement.classList.add('task');
    document.getElementById('tasks__list').append(taskElement);
    taskElement.querySelector('a').addEventListener ('click', (e) => {
        e.target.parentElement.remove();
    } );
}
