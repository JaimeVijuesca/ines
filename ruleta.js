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
let girando = false; // Estado de la ruleta

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

    if (girando) return; // Evitar que se gire mientras ya está girando
    girando = true; // Cambiar el estado a girando
    boton.disabled = true; // Deshabilitar el botón mientras gira


    const numOpciones = opciones.length;
    const anguloPorOpcion = 360 / numOpciones;
    const giros = Math.floor(Math.random() * 5) + 5; // Giros completos
    const opcionSeleccionada = opcionFija !== null ? opcionFija : Math.floor(Math.random() * numOpciones);
    const anguloFinal = 360 * giros + opcionSeleccionada * anguloPorOpcion;

    anguloActual += anguloFinal;
    ruletaCanvas.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    ruletaCanvas.style.transform = `rotate(${anguloActual}deg)`;

    setTimeout(() => {
        // Ajustar el ángulo para que coincida con la flecha (270° o -90°)
        const anguloSeleccionado = (360 - (anguloActual % 360) + 270) % 360;
        const indiceSeleccionado = Math.floor(anguloSeleccionado / anguloPorOpcion) % numOpciones;
        if(opciones[indiceSeleccionado] === "Regalo") {
            setTimeout(() => {
                  window.location.href = "super-regalo.html"; // Redirigir a la página de regalo
            }, 1000); // Esperar un segundo antes de mostrar el mensaje
        }else {
        alert(`Te tocó: ${opciones[indiceSeleccionado]}`);
        }
        // Reiniciar el estado
        girando = false; // Cambiar el estado a no girando
        boton.disabled = false; // Habilitar el botón nuevamente
    }, 4000); // Esperar a que termine la animación
}

// Eventos
boton.addEventListener("click", () => girarRuleta());


// Inicializar
dibujarRuleta();