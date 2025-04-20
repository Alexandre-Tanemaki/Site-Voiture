// Sélectionnez toutes les cartes
const cards = document.querySelectorAll('.card-img-container');

// Ajoutez des écouteurs d'événements pour chaque carte
cards.forEach(card => {
  const overlay = card.querySelector('.card-overlay');
  const image = card.querySelector('.card-img-top');

  // Effet au survol
  card.addEventListener('mouseenter', () => {
    overlay.style.opacity = '1';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    image.style.transform = 'scale(1.1)';
  });

  // Effet lorsque la souris quitte la carte
  card.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
    image.style.transform = 'scale(1)';
  });
});

