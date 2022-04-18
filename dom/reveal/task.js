const reveal = document.querySelectorAll('.reveal');
const revealPositons = reveal.forEach((item) => console.log(item.getBoundingClientRect().top));


function isVisible() {
    
    for (i = 0; i < reveal.length; i++) {

        if (reveal.item(i).getBoundingClientRect().top > 0 && reveal.item(i).getBoundingClientRect().top < window.innerHeight) {
            reveal.item(i).classList.add('reveal_active');
        }
        else {
            reveal.item(i).classList.remove('reveal_active');
        }
    }
    
}

window.addEventListener('scroll', isVisible);
