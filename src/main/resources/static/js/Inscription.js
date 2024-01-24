
//!MESSAGE D'ENREGISTREMENT ET REDIRECTION
document.addEventListener("DOMContentLoaded", function () {
    let successMessage = document.getElementById("success-message");
    const oldDiv = document.querySelector('#containBoite');

    if (successMessage && new URLSearchParams(window.location.search).get("success") === "true") {
        replaceDiv(oldDiv);
        console.log("replacediv OK");

        setTimeout(function () {
            successMessage.style.display = "none";
            window.location.href = "/login";
        }, 2000);
    }
});

//!Remplacement des div:
function replaceDiv(oldDiv) {
    
    // Crée une nouvelle div et définit ses propriétés de style BOOTSTRAP
    const newDiv = document.createElement('div');
    newDiv.className = "col-12 mx-auto text-center";
    newDiv.id = "remerciement";

    // Crée le premier paragraphe et l'ajoute à la nouvelle div
    const p1 = document.createElement('p');
    p1.textContent = "Merci de votre inscription.";
    newDiv.appendChild(p1);

    // Crée le second paragraphe et l'ajoute à la nouvelle div
    const p2 = document.createElement('p');
    p2.textContent = "Veuillez vous connecter";
    newDiv.appendChild(p2);

    // Remplace l'ancienne div par la nouvelle div
    oldDiv.replaceWith(newDiv);
}

//!VALIDATION DES CARACTERES ET FORMES
function validateForm() {
    return validateEmail() && validatePhoneNumber() && validatePassword() && comparePassword();
}

function validateEmail() {
    const emailInput = document.getElementById('adresseMail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorEmail = document.getElementById('errorEmail');
    if (!emailRegex.test(emailInput.value)) {
        errorEmail.style.display = 'block';
        return false;
    }
    errorEmail.style.display = 'none';
    return true;
}

function validatePhoneNumber() {
    const phoneNumberInput = document.getElementById('numeroTelephone');
    const phoneNumberRegex = /^\d{10}$/;
    const errorPhoneNumber = document.getElementById('errorPhoneNumber');
    if (!phoneNumberRegex.test(phoneNumberInput.value)) {
        errorPhoneNumber.style.display = 'block';
        return false;
    }
    errorPhoneNumber.style.display = 'none';
    return true;
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const errorPassword = document.getElementById('errorPassword');
    if (!passwordRegex.test(passwordInput.value)) {
        errorPassword.style.display = 'block';
        return false;
    }
    errorPassword.style.display = 'none';
    return true;
}

function comparePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorConfirmPassword = document.getElementById('errorConfirmPassword');
    if (password !== confirmPassword) {
        errorConfirmPassword.style.display = 'block';
        return false;
    }
    errorConfirmPassword.style.display = 'none';
    return true;
}

//! CLICK PAR ENTREE
document.addEventListener("keyup", function (e) {
    if (e.key === 'Enter') {
        document.getElementById("btonForm").click();
    }
});

//! AFFICHE L'IMAGE QUAND L ELEMENT EST CLICK
function toggleThumbnailOnClick(triggerElement, thumbnailElement) {
    let isThumbnailVisible = true;
    triggerElement.addEventListener('click', () => {
        thumbnailElement.style.visibility = isThumbnailVisible ? 'visible' : 'hidden';
        isThumbnailVisible = !isThumbnailVisible;
    });
}


//! AGRANDIR IMAGE A 100%
function activerModePleinEcran(imgMiniature, imgPleinEcran) {
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            imgPleinEcran.style.display = 'none';
        }
    });
    imgMiniature.addEventListener('click', () => {
        if (document.fullscreenEnabled) {
            imgPleinEcran.style.display = 'flex';
            imgPleinEcran.requestFullscreen();
        }
    });
}

// IMAGE TABLE
activerModePleinEcran(document.getElementById('thumbnailTable'), document.getElementById('imgTable'));
toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailTable"));

activerModePleinEcran(document.getElementById('thumbnailSQL'), document.getElementById('imgSQL'));
toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailSQL"));

activerModePleinEcran(document.getElementById('thumbnailMCD'), document.getElementById('imgMCD'));
toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailMCD"));

activerModePleinEcran(document.getElementById('thumbnailMLD'), document.getElementById('imgMLD'));
toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailMLD"));

