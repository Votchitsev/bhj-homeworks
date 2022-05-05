const progress = document.getElementById('progress')
const form = document.getElementById('form')

let formData = new FormData(form)

const xhr = new XMLHttpRequest()

form.onsubmit = (e) => loadFile(e)

function loadFile(e) {
    e.preventDefault()
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
    xhr.send(formData)
    xhr.upload.onprogress = (event) => {
        progress.value = (event.loaded / event.total).toFixed(1)
    }
}
