function createNewDiv(idImage, imageSrc, title, description) {
    const newDiv = document.createElement('div');
    newDiv.className = "col-11 mx-auto";

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

    const p = document.createElement('p');
    p.className = "description";
    p.style.fontSize = "18px";
    p.textContent = description;
    maBoite.appendChild(p);

    const a = document.createElement('a');
    a.href = "#";
    maBoite.appendChild(a);

    const button = document.createElement('button');
    button.id = "btonForm";
    button.type = "submit";
    button.className = "btn custom-button";
    button.onclick = redirigerVersCommandes;
    a.appendChild(button);

    const imgNormal = document.createElement('img');
    imgNormal.src = "/img/boutons/jecommande.png";
    imgNormal.alt = "Image";
    imgNormal.className = "normal-image";
    button.appendChild(imgNormal);

    const imgHover = document.createElement('img');
    imgHover.src = "/img/boutons/jecommandehover.png";
    imgHover.alt = "Image au survol";
    imgHover.className = "hover-image";
    button.appendChild(imgHover);

    const imgActive = document.createElement('img');
    imgActive.src = "/img/boutons/jecommandeActive.png";
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

// Original Div #BoiteAresVerts
const oldDiv1 = document.querySelector('#BoiteAresVerts');
// New Div AresVerts
const newDivAresVerts = createNewDiv(
    'AresVerts',
    '/img/commandes/les-ares-verts-logo.png',
    'Les Ares Verts',
    'Commande de pommes, jus de pommes , compote, petillant, purée et chutney de légumes. commande jusqu\'au 03/02'
);

// Original Div  #BoitesRoure
const oldDiv2 = document.querySelector('#BoitesRoure');
// New Div Les Pots-Potes
const newDivBoitesRoure = createNewDiv(
    'RoureImg',
    '/img/commandes/RoureRiz.png',
    'Riz de Roure',
    'Le riz est produit par la même famille depuis 1920. Le Domaine est converti en 100% bio depuis 2012.'
);

// Original Div #Bioespuna
const oldDiv3 = document.querySelector('#BoiteBioespuna');
// New Div Les Pots-Potes
const newDivBioespuna = createNewDiv(
    'BioespunaImg',
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