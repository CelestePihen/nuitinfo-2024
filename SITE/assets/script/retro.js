document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById("toggle-retro");
    const body = document.body;
  
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("retro-gaming");
  
      if (body.classList.contains("retro-gaming")) {
        toggleButton.textContent = "👾 Désactiver le mode rétro gaming 👾";
      } else {
        toggleButton.textContent = "👾 Activer le mode rétro gaming 👾";
      }
    });
  });
  