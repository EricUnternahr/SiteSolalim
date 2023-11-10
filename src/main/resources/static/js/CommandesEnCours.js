// ! BOITES COMMANDES EN COURS

function createNewDiv(idImage, imageSrc, title, description) {
    const newDiv = document.createElement('div');

    newDiv.innerHTML = `<div class="col-11 mx-auto">
                        <div class="ma-boite text-center">
                            <img ${idImage} src="${imageSrc}" alt="Image">
                            <h2>${title}</h2>
                            <p class="description" style="font-size: 18px;">${description}</p>
                            <a href="#">
                                <button id="btonForm" type="submit" class="btn custom-button"onclick="redirigerVersCommandes()">
                                    <img src="/img/boutons/jecommande.png" alt="Image" class="normal-image">
                                    <img src="/img/boutons/jecommandehover.png" alt="Image au survol" class="hover-image">
                                    <img src="/img/boutons/jecommandeActive.png" alt="Image au clic" class="active-image">
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

// Original Div #BoiteAresVerts
const oldDiv1 = document.querySelector('#BoiteAresVerts');
// New Div AresVerts
const newDivAresVerts = createNewDiv(
    'id="AresVerts"',
    '/img/commandes/les-ares-verts-logo.png',
    'Les Ares Verts',
    'Commande de pommes, jus de pommes , compote, petillant, purée et chutney de légumes. commande jusqu\'au 03/02'
);

// Original Div  #BoitesRoure
const oldDiv2 = document.querySelector('#BoitesRoure');
// New Div Les Pots-Potes
const newDivBoitesRoure = createNewDiv(
    'id="RoureImg"',
    '/img/commandes/RoureRiz.png',
    'Riz de Roure',
    'Le riz est produit par la même famille depuis 1920. Le Domaine est converti en 100% bio depuis 2012.'
);

// Original Div #Bioespuna
const oldDiv3 = document.querySelector('#BoiteBioespuna');
// New Div Les Pots-Potes
const newDivBioespuna = createNewDiv(
    'id="BioespunaImg"',
    '/img/commandes/logotipo_bioespuna_fr.png',
    'Bioespuna',
    'Citrons, Oranges, Kakis,Avocats, Grenades, Amandes,Noix, Huile d\'olive,Pamplemousse,Olives.'
);

// Clic listener
oldDiv1.addEventListener('click', () => replaceDiv(oldDiv1, newDivAresVerts));
newDivAresVerts.addEventListener('click', () => returnToInitialState(newDivAresVerts, oldDiv1));

oldDiv2.addEventListener('click', () => replaceDiv(oldDiv2, newDivBoitesRoure));
newDivBoitesRoure.addEventListener('click', () => returnToInitialState(newDivBoitesRoure, oldDiv2));

oldDiv3.addEventListener('click', () => replaceDiv(oldDiv3, newDivBioespuna));
newDivBioespuna.addEventListener('click', () => returnToInitialState(newDivBioespuna, oldDiv3));

//! CLIC DU BOUTON DECONNECTION ET DES BOITES
function redirigerVersCommandes() {
    window.location.href = "Commandes";
}