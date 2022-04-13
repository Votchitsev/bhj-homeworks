const next = document.querySelector('.slider__arrow_next');
const previous = document.querySelector('.slider__arrow_prev');
const items = document.querySelectorAll('.slider__item');

console.log(items[-1]);

next.onclick = () => {
        let active = document.querySelector('.slider__item_active');

        if (active.nextElementSibling == null) {
            nextElement = items.item(0);
            nextElement.className = 'slider __item slider__item_active';
            active.className = 'slider__item';
        }
        else {
            active.nextElementSibling.className = 'slider__item slider__item_active';
            active.className = 'slider__item';
        }
}

previous.onclick = () => {
    let active = document.querySelector('.slider__item_active');

    if (active.previousElementSibling == null) {
        previousElement = items.item(items.length - 1);
        previousElement.className = 'slider __item slider__item_active';
        active.className = 'slider__item';
    }
    else {
        active.previousElementSibling.className = 'slider__item slider__item_active';
        active.className = 'slider__item';
    }
}