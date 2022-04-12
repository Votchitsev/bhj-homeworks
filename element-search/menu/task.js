const menuLink = document.getElementsByClassName('menu__link');

let openedMenu = [];

for (let i=0; i < menuLink.length; i++) {
    
    menuLink.item(i).onclick = () => {
        
        let menuSubItem = menuLink.item(i).parentElement.querySelector('.menu_sub');
        
        closeMenu();
        
        menuSubItem.className = 'menu menu_sub menu_active';
        
        if (menuSubItem != null) {
            return false;
        }
    }
}

function closeMenu () {
    menuList = document.getElementsByClassName('menu_sub');
    for (let i = 0; i < menuList.length; i++) {
        menuList.item(i).className = 'menu menu_sub';
    }
}
