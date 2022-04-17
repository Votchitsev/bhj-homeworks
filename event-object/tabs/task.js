const tabNavigation = document.querySelector('.tab__navigation');

const tabContent = document.querySelector('.tab__contents');


for (i = 0; i < tabNavigation.children.length; i++) {

    const tab = tabNavigation.children.item(i);
    const content = tabContent.children.item(i);
    
    tab.addEventListener('click', () => {

        let tabActive = tabNavigation.querySelector('.tab_active');
        let tabContentActive = document.querySelector('.tab__content_active');

        tab.className = 'tab tab_active';
        tabActive.className = 'tab';
        
        content.className = 'tab__content tab__content_active';
        tabContentActive.className = 'tab__content';
        
    })
}
