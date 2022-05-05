const pollTitle = document.querySelector('#poll__title')
const pollAnswers = document.querySelector('#poll__answers')

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')

xhr.send()

xhr.onload = () => {
    let responseData = JSON.parse(xhr.response).data
    pollTitle.textContent = responseData.title
    
    for (let i in responseData.answers) {
        let answer = document.createElement('button')
        answer.classList.add('poll__answer')
        answer.textContent = responseData.answers[i]
        pollAnswers.append(answer)
    }

    let pollButtons = document.querySelectorAll('.poll__answer')

    for (let i in pollButtons) {
        pollButtons[i].onclick = (e) => {
            alert('Спасибо! Ваш голос засчитан!')
        }
    } 
}
