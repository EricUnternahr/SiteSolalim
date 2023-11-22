// ! BOITES RESEAUX

function createNewDiv(idImage, imageSrc, title, description, clic) {
    const newDiv = document.createElement('div');
    newDiv.className = "col-12 mx-auto";

    const maBoite = document.createElement('div');
    maBoite.className = "ma-boite text-center";
    newDiv.appendChild(maBoite);

    const img = document.createElement('img');
    img.id = idImage;
    img.src = imageSrc;
    img.alt = "Image";
    maBoite.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = title;
    maBoite.appendChild(h2);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = "m-1";
    maBoite.appendChild(descriptionDiv);

    const p = document.createElement('p');
    p.className = "description";
    p.style.fontSize = "18px";
    p.textContent = description;
    descriptionDiv.appendChild(p);

    const a = document.createElement('a');
    a.href = "#";
    maBoite.appendChild(a);

    const button = document.createElement('button');
    button.id = "btonForm";
    button.type = "submit";
    button.className = "btn custom-button";
    button.addEventListener('click', window[clic]);
    a.appendChild(button);

    const imgNormal = document.createElement('img');
    imgNormal.src = "/img/boutons/inscrire.png";
    imgNormal.alt = "Image";
    imgNormal.className = "normal-image";
    button.appendChild(imgNormal);

    const imgHover = document.createElement('img');
    imgHover.src = "/img/boutons/inscrireHover.png";
    imgHover.alt = "Image au survol";
    imgHover.className = "hover-image";
    button.appendChild(imgHover);

    const imgActive = document.createElement('img');
    imgActive.src = "/img/boutons/inscrireActive.png";
    imgActive.alt = "Image au clic";
    imgActive.className = "active-image";
    button.appendChild(imgActive);

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
    'lesBiotineuses',
    '/img/reseau/les_biotineuses.png',
    'Les Biotineuses',
    'Adhérents du groupement d\'achat de Lagrasse et villages des alentours. Lieux et dates de distribution à Pradelles en Val, Lagrasse, Serviès (relatifs aux commandes.)',
    'redirigerVersInscription()'
    );

// Original Div  #BoitePotsPotes
const oldDiv2 = document.querySelector('#BoitePotsPotes');
// New Div Les Pots-Potes
const newDivPotsPotes = createNewDiv(
    'lesPotsPotes',
    '/img/reseau/favicon.png',
    'Les POT-POTES',
    'Capendu, Douzens, Barbaira, Marseillette Les pots potes de l Alaric vous proposent une alternative à la grande distribution : écologique, économique, éthique et conviviale !',
    'redirigerVersInscription()'
    );

// Original Div #BoiteLoco
const oldDiv3 = document.querySelector('#BoitesLoco');
// New Div Les Pots-Potes
const newDivLoco = createNewDiv(
    'LocoMinges',
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
