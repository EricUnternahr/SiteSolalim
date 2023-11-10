// ! BOUTON SWITCH
const switchElement = document.getElementById('switch');

switchElement.addEventListener('change', () => {
    const bodyElement = document.body;

    if (switchElement.checked) {
        bodyElement.classList.remove('body-dark');
        bodyElement.classList.add('body-light');
    } else {
        bodyElement.classList.remove('body-light');
        bodyElement.classList.add('body-dark');
    }
});
