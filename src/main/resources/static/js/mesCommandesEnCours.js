//! CLIC DU BOUTON DECONNECTION ET DES BOITES
function redirigerVersCommande() {
    window.location.href = "Commandes";
}

//!METTRE LES INFORMATIONS EN A JOUR
document.addEventListener("DOMContentLoaded", function () {
    // Définition des données des produits
    const products = [
        { id: "Produit1", quant: localStorage.getItem("quantité1"), total: localStorage.getItem("Total1"), type: "cagettes de 7kg", img: document.getElementById("pdtimg1") },
        { id: "Produit2", quant: localStorage.getItem("quantité2"), total: localStorage.getItem("Total2"), type: "cagettes de 7kg", img: document.getElementById("pdtimg2") },
        { id: "Produit3", quant: localStorage.getItem("quantité3"), total: localStorage.getItem("Total3"), type: "cartons de 12 pots", img: document.getElementById("pdtimg3") },
        { id: "Produit4", quant: localStorage.getItem("quantité4"), total: localStorage.getItem("Total4"), type: "cartons de 6 bouteilles", img: document.getElementById("pdtimg4") }
    ];

    // Mise à jour de l'affichage pour chaque produit
    products.forEach(({ id, quant, total, type, img }) => {
        if (quant && quant != 0) {
            const productElement = document.getElementById(id);
            productElement.textContent = `${quant} ${type} : ${total} €`;
            img.style.visibility = "visible";
        }
    });

    // Mise à jour du total de la commande
    const TotCommande = localStorage.getItem("TotalCommande");
    if (TotCommande && TotCommande != 0) {
        document.getElementById("TotCommande").textContent = `TOTAL COMMANDE ${TotCommande} €`;
    }
});


