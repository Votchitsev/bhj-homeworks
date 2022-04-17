const dropdown = document.querySelector('.dropdown');
let dropdownValue = document.querySelector('.dropdown__value');
let dropdownLinkItems = document.querySelectorAll('.dropdown__link');

dropdown.onclick = openMenu;

for (let i = 0; i < dropdownLinkItems.length; i++) {
        dropdownLinkItems.item(i).onclick = () => {
            dropdownValue.textContent = dropdownLinkItems.item(i).textContent; 
            return false;
        }
    }

function openMenu() { 
    let dropdownList = dropdown.querySelector('.dropdown__list');

    if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.className = 'dropdown__list';
    }
    else {
        dropdownList.className += ' dropdown__list_active';
    }
}   
