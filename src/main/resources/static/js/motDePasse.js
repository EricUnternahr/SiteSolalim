//! VOIR LE MOT DE PASSE EN CLAIR
const toggleOldPassword = document.querySelector('#toggleOldPassword');
const toggleNewPassword = document.querySelector('#toggleNewPassword');
const toggleRepeatPassword = document.querySelector('#toggleRepeatPassword');

const oldPassword = document.querySelector('#oldPassword');
const newPassword = document.querySelector('#newPassword');
const repeatPassword = document.querySelector('#repeatPassword');

toggleOldPassword.addEventListener('click', () => {
    const type = oldPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    oldPassword.setAttribute('type', type);
    toggleOldPassword.querySelector('i').classList.toggle('bi-eye');
});

toggleNewPassword.addEventListener('click', () => {
    const type = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    newPassword.setAttribute('type', type);
    toggleNewPassword.querySelector('i').classList.toggle('bi-eye');
});

toggleRepeatPassword.addEventListener('click', () => {
    const type = repeatPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    repeatPassword.setAttribute('type', type);
    toggleRepeatPassword.querySelector('i').classList.toggle('bi-eye');
});

//!MESSAGE D'ENREGISTREMENT ET REDIRECTION
document.addEventListener("DOMContentLoaded", function () {
    if (new URLSearchParams(window.location.search).get("success") === "true") {
        
        replaceDiv(oldDiv, newDiv)

        
        setTimeout(function () {
            window.location.href = "/monCompte";
        }, 2000);
    }
});

//!Remplacement des div:
function replaceDiv(oldDiv, newDiv) {
    oldDiv.replaceWith(newDiv);
}
const oldDiv = document.querySelector('#containBoite');
const newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="col-12 mx-auto" id="remerciement" text-center>
                            <p>Le mot de passe est enregistré.</p>                            
                            </div>`;

//! AFFICHE L'IMAGE QUAND L ELEMENT EST CLICK
function toggleThumbnailOnClick(triggerElement, thumbnailElement) {
    let isThumbnailVisible = true;
    triggerElement.addEventListener('click', () => {
        thumbnailElement.style.visibility = isThumbnailVisible ? 'visible' : 'hidden';
        console.log('Cela a été cliqué');
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

// IMAGE Seq
activerModePleinEcran(document.getElementById('thumbnailSeq'), document.getElementById('imgSeq'));
toggleThumbnailOnClick(document.querySelector("#MDP"), document.querySelector("#thumbnailSeq"));

// IMAGE DIAG ACT
activerModePleinEcran(document.getElementById('thumbnailDiagActChangMDP'), document.getElementById('imgdiagActChangMDP'));
toggleThumbnailOnClick(document.querySelector("#MDP"), document.querySelector("#thumbnailDiagActChangMDP"));



