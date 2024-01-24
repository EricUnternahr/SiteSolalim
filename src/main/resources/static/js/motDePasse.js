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

//!VALIDATION DES CARACTERES ET FORMES

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



//!MESSAGE D'ENREGISTREMENT ET REDIRECTION
document.addEventListener("DOMContentLoaded", function () {
    if (new URLSearchParams(window.location.search).get("success") === "true") {
        const oldDiv = document.querySelector('#containBoite');
        replaceDiv(oldDiv);

        setTimeout(function () {
            window.location.href = "/monCompte";
        }, 2000);
    }
});


//!Remplacement des div:
function replaceDiv(oldDiv, newDivContent) {
    // Création du nouveau div
    const newDiv = document.createElement('div');
    newDiv.className = "col-12 mx-auto text-center";
    newDiv.id = "remerciement";

    // Ajout de contenu textuel au nouveau div
    const p = document.createElement('p');
    p.textContent = "Le mot de passe est enregistré.";
    newDiv.appendChild(p);

    // Remplacement de l'ancien div par le nouveau
    oldDiv.replaceWith(newDiv);
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



