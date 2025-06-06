const featureCards = document.querySelectorAll('.card');

const randomIndex = Math.floor(Math.random() * 3);
featureCards[randomIndex].innerHTML += '<img class="hidden-icon" src="./assets/img/logo_lyreco.png" alt="Logo de Lyreco" onclick="toggleRotation(this)">';

function toggleRotation(element) {
    if (!element.classList.contains('rotated')) {
        element.classList.add('rotated');
        setTimeout(() => {
            element.classList.remove('rotated');
            element.classList.add('back-rotation');
        }, 500);
        setTimeout(() => {
            element.classList.remove('back-rotation');
        });
    }
}