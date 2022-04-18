const rotatorCases = document.querySelectorAll('.rotator__case');
let index = 0;

function changeActiveRotatorCase () {

    if (index == rotatorCases.length) {
        index = 0;  
    }
    
    if (rotatorCases.item(index).previousElementSibling == null) {
        rotatorCases.item(index).classList.add('rotator__case_active');
        rotatorCases.item(rotatorCases.length - 1).className = 'rotator__case';    
    }
    else{
        rotatorCases.item(index).previousElementSibling.classList.remove('rotator__case_active');
        rotatorCases.item(index).classList.add('rotator__case_active');
    }
    
    index += 1;
}


let interval = setInterval(changeActiveRotatorCase, 1000);
