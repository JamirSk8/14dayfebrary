const heartBox = document.getElementById("heartBox");
const message = document.querySelector(".message");

// Lluvia de flores (emojis)
const flowerShapes = [
    '🌸', '🌺', '🌻', '🌼', '💐', '🌷', '🥀', '🪻', '🪷', '🌹', '🪴', '🌱', '🌿', '🍃', '🍀', '🌾'
];
function random(min, max) { return Math.random() * (max - min) + min; }
function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'floating-heart'; // reutiliza la clase para animación
    flower.textContent = flowerShapes[Math.floor(Math.random() * flowerShapes.length)];
    const left = random(0, 98);
    const size = random(1.2, 2.2);
    const dur = random(3.5, 7);
    const rot = random(-40, 40);
    const scale = random(0.8, 1.3);
    const opacity = random(0.6, 1);
    // Colores primaverales para flores
    const colors = ['#ffb6e6','#ffeb3b','#ff8fa3','#b2ff59','#b39ddb','#81d4fa','#f06292','#f44336','#ffd700','#e1bee7','#c8e6c9','#fff176'];
    const color = colors[Math.floor(Math.random()*colors.length)];
    flower.style.left = left + 'vw';
    flower.style.setProperty('--size', size + 'rem');
    flower.style.setProperty('--color', color);
    flower.style.setProperty('--rot', rot + 'deg');
    flower.style.setProperty('--scale', scale);
    flower.style.setProperty('--opacity', opacity);
    flower.style.animationDuration = dur + 's';
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), dur * 1000);
}
let flowerInterval = null;
function startFlowerRain() {
    if (!flowerInterval) {
        flowerInterval = setInterval(createFlower, 250);
    }
}
function stopFlowerRain() {
    if (flowerInterval) {
        clearInterval(flowerInterval);
        flowerInterval = null;
    }
}

heartBox.addEventListener("click", () => {
        heartBox.classList.toggle("open");
        if (heartBox.classList.contains("open")) {
                // Si tienes un candado, actualiza aquí el texto si lo deseas
                message.textContent = "Mi corazón está abierto 💖";
                startFlowerRain();
                setTimeout(() => {
                        window.location.href = 'password.html';
                }, 1200);
        } else {
                message.textContent = "Haz clic para abrir mi corazón";
                stopFlowerRain();
        }
});
