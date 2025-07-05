// Corazones que siguen el mouse
function corazonesMouse(e) {
    for (let i = 0; i < 2; i++) { // 2 corazones por movimiento para mayor efecto
        const heart = document.createElement('div');
        heart.className = 'mouse-heart';
        heart.textContent = Math.random() > 0.5 ? '💖' : '💗';
        heart.style.left = (e.clientX + (Math.random() - 0.5) * 30) + 'px';
        heart.style.top = (e.clientY + (Math.random() - 0.5) * 30) + 'px';
        heart.style.fontSize = (1.1 + Math.random() * 0.7) + 'em';
        heart.style.opacity = 0.7 + Math.random() * 0.3;
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);
        setTimeout(() => heart.classList.add('mouse-heart-fly'), 10);
        setTimeout(() => heart.remove(), 1200);
    }
}
window.addEventListener('mousemove', corazonesMouse);
// Corazones flotantes de fondo
function crearCorazonesFondo() {
    const cantidad = 16;
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    for (let i = 0; i < cantidad; i++) {
        const heart = document.createElement('div');
        heart.className = 'bg-heart';
        heart.textContent = '💗';
        heart.style.left = Math.random() * (ancho - 40) + 'px';
        heart.style.top = (alto * 0.2 + Math.random() * alto * 0.7) + 'px';
        heart.style.fontSize = (1.5 + Math.random() * 2.5) + 'em';
        heart.style.animationDuration = (10 + Math.random() * 8) + 's';
        heart.style.opacity = 0.12 + Math.random() * 0.18;
        document.body.appendChild(heart);
    }
}
window.addEventListener('DOMContentLoaded', crearCorazonesFondo);
// Mostrar la imagen solo al presionar el botón
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('surprise-btn');
    var img = document.getElementById('main-photo');
    btn.addEventListener('click', function() {
        img.style.display = 'block';
    });
});
// Animar globos flotando
function crearGlobo() {
    const colores = ['#e75480', '#ff69b4', '#ffb6c1', '#fff'];
    const globo = document.createElement('div');
    globo.className = 'balloon';
    globo.style.left = Math.random() * 100 + 'vw';
    globo.style.background = `radial-gradient(circle at 30px 30px, #fff 10%, ${colores[Math.floor(Math.random()*colores.length)]} 100%)`;
    globo.style.animationDuration = (6 + Math.random() * 4) + 's';
    document.getElementById('balloons').appendChild(globo);
    setTimeout(() => globo.remove(), 10000);
}
setInterval(crearGlobo, 800);

// Mensajes y fotos sorpresa
const mensajes = [
    'Eres la razón de mi sonrisa cada día 💖',
    'Gracias por estar a mi lado, te quiero mucho roci 💞',
    '¡Hoy celebramos tu vida, mi bebita consentida! 🎂',
    'Solo quiero verte feliz, porque te lo mereces todo 💕',
    'Cada momento contigo es un regalo que atesoro 💖',
    'Te elijo hoy y todos los días, mi bebita linda 🌹',
    'Eres mi sol en los días grises y mi alegría constante ☀️',
    'Tu risa ilumina mi mundo, ¡gracias por ser tú!🌈',
    '¡Feliz cumpleaños, mi rocii 🌺!'

];
const fotos = [
    'imagenes/osoamoroso.gif',
    'imagenes/selfie.jpg',
    'imagenes/tuyyo.gif',
    'imagenes/temiroamor.gif',
    'imagenes/Mishel1.jpg',
    'imagenes/Mishel2.jpg',
    'imagenes/ahorcame.jpg',
    'imagenes/batmankitty.jpg',
    'imagenes/abrazito.gif'

];
let indice = 0;

// Confeti animado
function lanzarConfeti() {
    const colores = ['#e75480', '#ff69b4', '#ffb6c1', '#fff', '#ffd700', '#7fffd4', '#ff6347'];
    for (let i = 0; i < 80; i++) {
        const confeti = document.createElement('div');
        confeti.className = 'confeti';
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.background = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
        confeti.style.width = (6 + Math.random() * 6) + 'px';
        confeti.style.height = (10 + Math.random() * 10) + 'px';
        confeti.style.opacity = 0.8 + Math.random() * 0.2;
        confeti.style.transform = `rotate(${Math.random()*360}deg)`;
        confeti.style.borderRadius = '3px';
        confeti.style.position = 'fixed';
        confeti.style.top = '-20px';
        confeti.style.zIndex = 9999;
        document.body.appendChild(confeti);
        setTimeout(() => confeti.remove(), 2000);
    }
}

document.getElementById('surprise-btn').onclick = function() {
    const msgDiv = document.getElementById('messages');
    const img = document.getElementById('main-photo');
    // Mensaje flotante como burbuja al costado
    const bubble = document.createElement('div');
    bubble.className = 'floating-bubble';
    bubble.textContent = mensajes[indice % mensajes.length];
    // Posición aleatoria a la derecha o izquierda
    const side = Math.random() > 0.5 ? 'right' : 'left';
    bubble.style[side] = '10px';
    bubble.style.top = (120 + Math.random() * 300) + 'px';
    document.body.appendChild(bubble);
    setTimeout(() => bubble.classList.add('show'), 10);
    setTimeout(() => bubble.classList.remove('show'), 3500);
    setTimeout(() => bubble.remove(), 4000);

    // Imagen y confeti
    img.src = fotos[indice % fotos.length];
    img.style.display = 'block';
    lanzarConfeti();
    indice++;
};
