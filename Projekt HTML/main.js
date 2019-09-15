const sdaInputs = document.querySelectorAll('.sda-input');

console.log('sdaInputs: ', sdaInputs);

for (let i = 0; i < sdaInputs.length; i++) {
    let currentlabel = sdaInputs[i].parentElement.firstElementChild;

    sdaInputs[i].addEventListener('focus', function () {
        currentlabel.classList.add('move-up');
    });

    sdaInputs[i].addEventListener('blur', function () {
        if (sdaInputs[i].value === '') {
            currentlabel.classList.remove('move-up');
        }
    });
}

function submitForm() {
    let contactForm = document.contactForm;

    alert('Your full name is:' + contactForm.name.value);
}