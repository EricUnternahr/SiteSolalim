//! CLIC DU BOUTON MOT DE PASSE
function redirigerVersMDP() {
    window.location.href = "motDePasse";
}

//! CLIC DU BOUTON DESINSCRIPTION
function redirigerVersDesinscription() {
    window.location.href = "desinscription";
}

//! AFFICHE L'IMAGE QUAND L ELEMENT EST CLICK
function toggleThumbnailOnClick(triggerElement, thumbnailElement) {
    let isThumbnailVisible = true;
    triggerElement.addEventListener('click', () => {
        thumbnailElement.style.visibility = isThumbnailVisible ? 'visible' : 'hidden';
        isThumbnailVisible = !isThumbnailVisible;
    });
}


