const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Fonction pour mettre à jour la position des images
function updateCarousel() {
  const offset = -currentIndex * 100; // Décale les images horizontalement
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Bouton suivant
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Boucle au début
  updateCarousel();
});

// Bouton précédent
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Boucle à la fin
  updateCarousel();
});

// Défilement automatique toutes les 5 secondes
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 5000);