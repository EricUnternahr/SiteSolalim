//! CLIC DES BOITES

function redirigerVerscommandesEnCours() {
    window.location.href = "CommandesEnCours";
}

function redirigerVersmesCommandesEnCours() {
    window.location.href = "mesCommandesEnCours";
}

function redirigerVersCommandesPassees() {
    window.location.href = "CommandesPassees";
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

//! IMAGE HTMLJS
activerModePleinEcran(document.getElementById('thumbcodeJSHTMLCOMMANDE'), document.getElementById('imgJSHTML'));
toggleThumbnailOnClick(document.querySelector("#lesPotsPotes"), document.querySelector("#thumbcodeJSHTMLCOMMANDE"));

// !MISE A JOUR DE LA BOITE MES COMMANDES EN COURS
document.addEventListener("DOMContentLoaded", function () {
    const TotCommande = localStorage.getItem("TotalCommande")
    if (TotCommande != null && TotCommande != 0) {
        document.getElementById("commandeAresVerts").textContent = `Ares Verts pour une commande de ${TotCommande} € `;
    }
});

