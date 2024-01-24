//! CLIC DU BOUTON DECONNECTION ET DES BOITES
function redirigerVersConnexion() {
    window.location.href = "/logout";
}

function redirigerVersMonCompte() {
    window.location.href = "monCompte";
}

function redirigerVersmesCommandes() {
    window.location.href = "LesCommandes";
}

function redirigerVersGererCommandes() {
    window.location.href = "gererCommandes";
}

function redirigerVersReseaux() {
    window.location.href = "reseaux";
}

//! AFFICHE L'IMAGE QUAND L ELEMENT EST CLICK
function toggleThumbnailOnClick(triggerElement, thumbnailElement) {
    let isThumbnailVisible = true;
    triggerElement.addEventListener('click', () => {
        thumbnailElement.style.visibility = isThumbnailVisible ? 'visible' : 'hidden';
        console.log('Cela a été cliqué');
        isThumbnailVisible = !isThumbnailVisible;
    });
}

// //! AGRANDIR IMAGE A 100%
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

// IMAGE SEQUENCE
activerModePleinEcran(document.getElementById('thumbnailUseCase'), document.getElementById('UseCase'));
toggleThumbnailOnClick(document.querySelector("#lesPotsPotes"), document.querySelector("#thumbnailUseCase"));

// IMAGE ARBO
activerModePleinEcran(document.getElementById('thumbnailArbo'), document.getElementById('imgArbo'));
toggleThumbnailOnClick(document.querySelector("#hambMenu"), document.querySelector("#thumbnailArbo"));

