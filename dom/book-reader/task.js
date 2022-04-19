const fontSizeSwitches = document.querySelectorAll('.font-size');
const book = document.querySelector('#book');


for (i = 0; i < fontSizeSwitches.length; i++) {
    fontSizeSwitches.item(i).addEventListener("click", (event) => {
        event.preventDefault();
        let currentFontSize = document.querySelector('.font-size_active');
        currentFontSize.classList.remove('font-size_active');
        event.target.classList.add('font-size_active');
        changeFont(event.target.dataset.size);
    })
}


function changeFont (fontSize) {
    if (fontSize == 'big') {
        book.className = "book book_fs-big";
    }
    else if (fontSize == 'small') {
        book.className = "book book_fs-small"
    }
    else {
        book.className = "book"
    }
}
