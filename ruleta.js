const opciones = [
    "Regalo",
    "Cantar tu canción favorita",
    "Haz 10 saltos de alegría",
    "Tienes que bailar 30 segundos",
    "Imita a alguien de la familia"
];

const colores = ["#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#DB7093"];
const ruletaCanvas = document.getElementById("ruleta");
const ctx = ruletaCanvas.getContext("2d");
const boton = document.getElementById("boton");
const botonSecreto = document.getElementById("boton-secreto");

let anguloActual = 0;

// Dibujar la ruleta
function dibujarRuleta() {
    const numOpciones = opciones.length;
    const anguloPorOpcion = (2 * Math.PI) / numOpciones;

    for (let i = 0; i < numOpciones; i++) {
        const inicio = i * anguloPorOpcion;
        const fin = inicio + anguloPorOpcion;

        // Dibujar sector
        ctx.beginPath();
        ctx.moveTo(300, 300); // Centro del canvas
        ctx.arc(300, 300, 300, inicio, fin);
        ctx.fillStyle = colores[i];
        ctx.fill();
        ctx.closePath();

        // Dibujar texto
        ctx.save();
        ctx.translate(300, 300);
        ctx.rotate(inicio + anguloPorOpcion / 2);
        ctx.textAlign = "right"; // Alinear texto a la derecha
        ctx.fillStyle = "black"; // Texto en negro
        ctx.font = "bold 18px Arial"; // Texto más grande
        ctx.fillText(opciones[i], 280, 10); // Ajustar posición del texto
        ctx.restore();
    }
}

// Girar la ruleta
function girarRuleta(opcionFija = null) {
    const numOpciones = opciones.length;
    const anguloPorOpcion = 360 / numOpciones;
    const giros = Math.floor(Math.random() * 5) + 5; // Giros completos
    const opcionSeleccionada = opcionFija !== null ? opcionFija : Math.floor(Math.random() * numOpciones);
    const anguloFinal = 360 * giros + opcionSeleccionada * anguloPorOpcion;

    anguloActual += anguloFinal;
    ruletaCanvas.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    ruletaCanvas.style.transform = `rotate(${anguloActual}deg)`;

    setTimeout(() => {
        const anguloSeleccionado = (360 - (anguloActual % 360)) % 360; // Calcular el ángulo final
        const indiceSeleccionado = Math.floor(anguloSeleccionado / anguloPorOpcion);
        alert(`Te tocó: ${opciones[indiceSeleccionado]}`);
    }, 4000); // Esperar a que termine la animación
}

// Eventos
boton.addEventListener("click", () => girarRuleta());
botonSecreto.addEventListener("click", () => girarRuleta(0)); // Siempre selecciona "Regalo"

// Mostrar el botón secreto al mantener presionado Shift
document.addEventListener("keydown", (e) => {
    if (e.key === "Shift") {
        botonSecreto.style.display = "inline-block";
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Shift") {
        botonSecreto.style.display = "none";
    }
});

// Inicializar
dibujarRuleta();