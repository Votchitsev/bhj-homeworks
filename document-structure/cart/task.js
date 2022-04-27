const product = document.querySelectorAll('.product');
const cartProducts = document.querySelectorAll('.cart__products');

for (i = 0; i < product.length; i++) {

    const productId = product.item(i).dataset.id;
    const productImg = product.item(i).querySelector('img').getAttribute('src');
    
    product.item(i).querySelector('.product__controls > .product__quantity > .product__add').addEventListener('click', (e) => {
        const quantity = e.target.parentElement.querySelector('.product__quantity-value').textContent
        existElement = Array.from(cartProducts[0].querySelectorAll('.cart__product')).find((el) => el.dataset.id == productId);
        if (existElement) {
            let currentQuantity = existElement.querySelector('.cart__product-count').textContent
            let newQuantity = Number(currentQuantity) + Number(quantity);
            existElement.querySelector('.cart__product-count').textContent = newQuantity;
            return
        }
        const cartElement = document.createElement('div');
        cartElement.classList.add('cart__product');
        cartElement.setAttribute('data-id', productId);
        cartElement.innerHTML = `<img class="cart__product-image" src="${productImg}"><div class="cart__product-count">${quantity}</div>`
        document.querySelector('.cart__products').append(cartElement);
    })

    product.item(i).querySelector('.product__quantity-control_dec').addEventListener('click', (e) => {
        if (e.target.parentElement.querySelector('.product__quantity-value').textContent > 1) {
            e.target.parentElement.querySelector('.product__quantity-value').textContent -= 1;
        }
    })

    product.item(i).querySelector('.product__quantity-control_inc').addEventListener('click', (e) => {
        e.target.parentElement.querySelector('.product__quantity-value').textContent++;
    })
}   
