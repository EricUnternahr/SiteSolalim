// ! BOITES RESEAUX

function createNewDiv(idImage, imageSrc, title, description,clic) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="col-12 mx-auto">
                        <div class="ma-boite text-center">
                            <img ${idImage} src="${imageSrc}" alt="Image">
                            <h2>${title}</h2>
                            <div class=" m-1">
                            <p class="description" style="font-size: 18px;">${description}</p>
                            </div>
                            <a href="#">
                                <button id="btonForm" onclick="${clic}" type="submit" class="btn custom-button">
                                    <img src="/img/boutons/inscrire.png" alt="Image" class="normal-image">
                                    <img src="/img/boutons/inscrireHover.png" alt="Image au survol" class="hover-image">
                                    <img src="/img/boutons/inscrireActive.png" alt="Image au clic" class="active-image">
                                </button>
                            </a>
                        </div>
                    </div>`;

    return newDiv;
}

function replaceDiv(oldDiv, newDiv) {
    oldDiv.replaceWith(newDiv);
}

function returnToInitialState(newDiv, originalDiv) {
    newDiv.replaceWith(originalDiv);
}

// Original Div #Boite1
const oldDiv1 = document.querySelector('#Boite1');
// New Div Les Biotineuses
const newDivBiotineuses = createNewDiv(
    'id="lesBiotineuses"',
    '/img/reseau/les_biotineuses.png',
    'Les Biotineuses',
    'Adhérents du groupement d\'achat de Lagrasse et villages des alentours. Lieux et dates de distribution à Pradelles en Val, Lagrasse, Serviès (relatifs aux commandes.)',
    'redirigerVersInscription()'
    );

// Original Div  #BoitePotsPotes
const oldDiv2 = document.querySelector('#BoitePotsPotes');
// New Div Les Pots-Potes
const newDivPotsPotes = createNewDiv(
    'id="lesPotsPotes"',
    '/img/reseau/favicon.png',
    'Les POT-POTES',
    'Capendu, Douzens, Barbaira, Marseillette Les pots potes de l Alaric vous proposent une alternative à la grande distribution : écologique, économique, éthique et conviviale !',
    'redirigerVersInscription()'
    );

// Original Div #BoiteLoco
const oldDiv3 = document.querySelector('#BoitesLoco');
// New Div Les Pots-Potes
const newDivLoco = createNewDiv(
    'id="LocoMinges"',
    '/img/reseau/locominges.png',
    'LOCO MINGES',
    'Saint-Gaudens, 31 Le Loco Minges est une épicerie coopérative où trouver des produits locaux de saison, sélectionnés par et pour les Loco Mangeurs.',
    'redirigerVersInscription()'
);
// redirige vers formulaire d'inscription
function redirigerVersInscription() {
    window.location.href = "inscription";
}

// Clic listener
oldDiv1.addEventListener('click', () => replaceDiv(oldDiv1, newDivBiotineuses));
newDivBiotineuses.addEventListener('click', () => returnToInitialState(newDivBiotineuses, oldDiv1));

oldDiv2.addEventListener('click', () => replaceDiv(oldDiv2, newDivPotsPotes));
newDivPotsPotes.addEventListener('click', () => returnToInitialState(newDivPotsPotes, oldDiv2));

oldDiv3.addEventListener('click', () => replaceDiv(oldDiv3, newDivLoco));
newDivLoco.addEventListener('click', () => returnToInitialState(newDivLoco, oldDiv3));

// //! AFFICHE L'IMAGE QUAND L ELEMENT EST CLICK
function toggleThumbnailOnClick(triggerElement, thumbnailElement) {
    let isThumbnailVisible = true;
    triggerElement.addEventListener('click', () => {
        thumbnailElement.style.visibility = isThumbnailVisible ? 'visible' : 'hidden';
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

// IMAGE TABLE
activerModePleinEcran(document.getElementById('thumbnailReseaux'), document.getElementById('imgReseaux'));
toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailReseaux"));
