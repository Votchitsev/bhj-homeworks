const cardItem = document.querySelector('#items')
const loader = document.querySelector('#loader')

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')

xhr.send()

xhr.onload = function() {

    const response = JSON.parse(xhr.response).response

    loader.classList.remove('loader_active')
    
    for(let i in response.Valute) {
        let item = document.createElement('div')
        item.classList.add('item')

        let itemCode = document.createElement('div')
        itemCode.classList.add('item__code')
        itemCode.textContent = response.Valute[i]['CharCode']
        item.appendChild(itemCode)

        let itemValue = document.createElement('div')
        itemValue.classList.add('item__value')
        itemValue.textContent = response.Valute[i]['Value']
        item.appendChild(itemValue)

        let itemCurrency = document.createElement('div')
        itemCurrency.classList.add('item__currency')
        itemCurrency.textContent = 'руб.'
        item.appendChild(itemCurrency)

        cardItem.appendChild(item)
    }
}   
