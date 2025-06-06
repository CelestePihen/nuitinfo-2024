document.addEventListener('DOMContentLoaded', () => {
  const zones = document.querySelectorAll('.zone');
  const factDisplay = document.getElementById('fact-display');

  zones.forEach(zone => {
    zone.addEventListener('click', (event) => {
      event.preventDefault(); // Empêche tout comportement par défaut
      event.stopPropagation(); // Empêche la propagation de l'événement

      // Récupérer la description depuis l'attribut data-description
      const description = event.target.dataset.description;

      // Afficher la description dans l'élément dédié
      factDisplay.textContent = description;
    });
  });
});
