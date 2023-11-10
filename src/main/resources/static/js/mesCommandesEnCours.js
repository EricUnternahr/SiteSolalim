//! CLIC DU BOUTON DECONNECTION ET DES BOITES
function redirigerVersCommande() {
    window.location.href = "Commandes";
}

//!METTRE LES INFORMATIONS EN A JOUR
document.addEventListener("DOMContentLoaded", function () {
    const total1 = localStorage.getItem("Total1");
    const Quant1 = localStorage.getItem("quantité1");
    const total2 = localStorage.getItem("Total2");
    const Quant2 = localStorage.getItem("quantité2");
    const total3 = localStorage.getItem("Total3");
    const Quant3 = localStorage.getItem("quantité3");
    const total4 = localStorage.getItem("Total4");
    const Quant4 = localStorage.getItem("quantité4");
    const TotCommande = localStorage.getItem("TotalCommande");

    const pdtimg1 = document.getElementById("pdtimg1");
    const pdtimg2 = document.getElementById("pdtimg2");
    const pdtimg3 = document.getElementById("pdtimg3");
    const pdtimg4 = document.getElementById("pdtimg4");

    if (Quant1 != 0) {
        document.getElementById("Produit1").innerHTML = `<span style="font-weight: bold;">${Quant1}</span> cagettes de 7kg : <span style="font-weight: bold;">${total1} €</span>`;
        pdtimg1.style.visibility = "visible";
    }

    if (Quant2 != 0) {
        document.getElementById("Produit2").innerHTML = `<span style="font-weight: bold;">${Quant2}</span> cagettes de 7kg : <span style="font-weight: bold;">${total2} €</span>`;
        pdtimg2.style.visibility = "visible";
    }

    if (Quant3 != 0) {
        document.getElementById("Produit3").innerHTML = `<span style="font-weight: bold;">${Quant3}</span> cartons de 12 pots : <span style="font-weight: bold;">${total3} €</span>`;
        pdtimg3.style.visibility = "visible";
    }

    if (Quant4 != 0) {
        document.getElementById("Produit4").innerHTML = `<span style="font-weight: bold;">${Quant4}</span> cartons de 6 bouteilles : <span style="font-weight: bold;">${total4} €</span>`;
        pdtimg4.style.visibility = "visible";
    }

    if (TotCommande != 0) {
        document.getElementById("TotCommande").innerText = `TOTAL COMMANDE ${TotCommande} €`;
    }
});

// document.addEventListener("DOMContentLoaded", function() {
//     const pdtImgIds = ["pdtimg1", "pdtimg2", "pdtimg3", "pdtimg4"];
//     const produits = ["Produit1", "Produit2", "Produit3", "Produit4"];

//     let totCommande = 0;

//     for (let i = 1; i <= produits.length; i++) {
//         const quant = localStorage.getItem(`quantité${i}`);
//         const total = localStorage.getItem(`Total${i}`);
//         const pdtImg = document.getElementById(pdtImgIds[i - 1]);
//         const produit = document.getElementById(produits[i - 1]);

//         if (quant !== null) {
//             produit.innerHTML = `<span style="font-weight: bold;">${quant}</span> `;
//             produit.innerHTML += `cagettes de 7kg : <span style="font-weight: bold;">${total} €</span>`;
//             pdtImg.style.visibility = "visible";
//             totCommande += parseFloat(total);
//         }
//     }

//     const TotCommandeElement = document.getElementById("TotCommande");
//     TotCommandeElement.innerText = `TOTAL COMMANDE ${totCommande.toFixed(2)} €`;
//     localStorage.setItem("TotalCommande", totCommande.toFixed(2));
// });
