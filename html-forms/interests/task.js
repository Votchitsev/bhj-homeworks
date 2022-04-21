const interestCheck = document.querySelectorAll('.interests_main > ul > li.interest');

for (let i=0; i < interestCheck.length; i++) {

    const check = interestCheck.item(i);
    const mainCheckBox = check.querySelector('label > input');
    const secondaryCheckBox = check.querySelectorAll('ul.interests_active > li > label > input')

    mainCheckBox.addEventListener('change', () => {
        if (mainCheckBox.checked) {
            for (let i=0; i < secondaryCheckBox.length; i++) {
                secondaryCheckBox.item(i).checked = true;
            };
        }
        else {
            for (let i=0; i < secondaryCheckBox.length; i++) {
                secondaryCheckBox.item(i).checked = false;
            };
        }
    });
}   