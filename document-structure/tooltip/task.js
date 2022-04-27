const tooltips = document.querySelectorAll('.has-tooltip');

for (i = 0; i < tooltips.length; i++) {
    tooltips.item(i).onclick = (event) => {
        const tooltipActive = document.querySelector('.tooltip_active');
        if (tooltipActive !== null) {
            tooltipActive.remove();
            return false;
        }        
        const element = event.target;
        const tooltip = document.createElement('div');
        tooltip.className = "tooltip tooltip_active";
        tooltip.style.position = 'absolute';       
        tooltip.style.top = `${element.getBoundingClientRect().top + 20 + window.scrollY}px`;
        tooltip.style.left = `${element.getBoundingClientRect().left}px`;
        tooltip.textContent = element.title;
        element.insertAdjacentHTML('afterend', tooltip.outerHTML);       
        return false;
        }
    }
    