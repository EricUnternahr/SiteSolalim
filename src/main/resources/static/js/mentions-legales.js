const items = document.querySelectorAll('.slideshow-item');
let currentIndex = 0;

items[currentIndex].style.opacity = 1; // Affiche la première image

setInterval(function() {
    items[currentIndex].style.opacity = 0; // Cache l'image actuelle
    currentIndex = (currentIndex + 1) % items.length; // Passe à l'image suivante
    items[currentIndex].style.opacity = 1; // Affiche la nouvelle image
}, 3000); // 3000 ms = 3 secondes pour chaque image


