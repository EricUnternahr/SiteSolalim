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

    
    if(new URLSearchParams(window.location.search).get("success") === "false") {
        
        replaceDiv(oldDiv, newDivEmpty)

        
        setTimeout(function () {
            window.location.href = "/desinscription";
        }, 2000);
    }else if(new URLSearchParams(window.location.search).get("success") === "Error") {
        
        replaceDiv(oldDiv, newDivError)

        
        setTimeout(function () {
            window.location.href = "/desinscription";
        }, 2000);
    }else if (new URLSearchParams(window.location.search).get("success") === "true") {
        
        replaceDiv(oldDiv, newDiv)

        
        setTimeout(function () {
            window.location.href = "/login";
        }, 3000);
    }
});

//!REMPLACEMENT DES DIV:
function replaceDiv(oldDiv, newDiv) {
    oldDiv.replaceWith(newDiv);
}
const oldDiv = document.getElementById("oldDiv");
const newDiv = document.createElement('div');
newDiv.id = "newDiv";
newDiv.className = " text-center mx-auto"

newDiv.innerHTML = `<div class="col-12 mx-auto" id="remerciement" text-center>
                    <div class=" mb-1"><img src="/img/triangle.png" alt="Triangle d'avertissement"></div>
                    <h5>Vous etes bien desincris</h5>                            
                    </div>`;

const newDivEmpty = document.createElement('div');
newDivEmpty.id = "newDiv";
newDivEmpty.className = " text-center mx-auto"

newDivEmpty.innerHTML = `<div class="col-12 mx-auto" id="remerciement" text-center>
                        <div class=" mb-1"><img src="/img/triangle.png" alt="Triangle d'avertissement"></div>
                        <h5>Il faut le mot de passe</h5>                            
                        </div>`;

const newDivError = document.createElement('div');
newDivError.id = "newDiv";
newDivError.className = " text-center mx-auto"

newDivError.innerHTML = `<div class="col-12 mx-auto" id="remerciement" text-center>
                    <div class=" mb-1"><img src="/img/triangle.png" alt="Triangle d'avertissement"></div>
                    <h5>Le mot de passe ne correspond pas</h5>                            
                    </div>`;

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