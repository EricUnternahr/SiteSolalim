//! VOIR LE MOT DE PASSE EN CLAIR
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.querySelector('i').classList.toggle('bi-eye');
});

//!MESSAGE D'ENREGISTREMENT ET REDIRECTION
document.addEventListener("DOMContentLoaded", function () {
    const successParam = new URLSearchParams(window.location.search).get("success");
    let targetDiv;
    let redirectUrl;

    if (successParam === "false") {
        targetDiv = newDivEmpty;
        redirectUrl = "/desinscription";
    } else if (successParam === "Error") {
        targetDiv = newDivError;
        redirectUrl = "/desinscription";
    } else if (successParam === "true") {
        targetDiv = newDiv;
        redirectUrl = "/login";
    }

    if (targetDiv) {
        replaceDiv(oldDiv, targetDiv);
        setTimeout(function () {
            window.location.href = redirectUrl;
        }, successParam === "true" ? 3000 : 2000);
    }
});

//!REMPLACEMENT DES DIV:
function replaceDiv(oldDiv, newDiv) {
    oldDiv.replaceWith(newDiv);
}

//!Création des Div Spécifiques
const oldDiv = document.getElementById("oldDiv");

const newDiv = createDivWithContent("/img/triangle.png", "Vous êtes bien désinscrit");
const newDivEmpty = createDivWithContent("/img/triangle.png", "Il faut le mot de passe");
const newDivError = createDivWithContent("/img/triangle.png", "Le mot de passe ne correspond pas");

//!Fonction de Création de Div
function createDivWithContent(imgSrc, message) {
    const newDiv = document.createElement('div');
    newDiv.className = "col-12 mx-auto text-center mx-auto";

    const imgDiv = document.createElement('div');
    imgDiv.className = "mb-1";
    newDiv.appendChild(imgDiv);

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = "Triangle d'avertissement";
    imgDiv.appendChild(img);

    const h5 = document.createElement('h5');
    h5.textContent = message;
    newDiv.appendChild(h5);

    return newDiv;
}



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

// IMAGE GestionError
activerModePleinEcran(document.getElementById('thumbnailGestionError'), document.getElementById('imgGestionError'));
toggleThumbnailOnClick(document.querySelector("#desins"), document.querySelector("#thumbnailGestionError"));

activerModePleinEcran(document.getElementById('thumbnailrempDIV'), document.getElementById('imgrempDIV'));
toggleThumbnailOnClick(document.querySelector("#desins"), document.querySelector("#thumbnailrempDIV"));