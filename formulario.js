document.getElementById('giftForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const recipient = document.getElementById('recipient').value;
    let message = '';
    let icon = 'info'; // Icono por defecto
    let sound = ''; // Ruta del archivo de sonido

    switch (recipient) {
        case 'Jaime':
            message = 'Ya lo sabía, pero no es la respuesta correcta.';
            icon = 'error';
            sound = 'sad.mp3'; // Archivo de sonido para error
            break;
        case 'Ana':
            message = 'Ya lo sabía, pero no es la respuesta correcta.';
            icon = 'error';
            sound = 'sad.mp3'; // Archivo de sonido para error
            break;
        case 'Nacho':
            message = 'Ya lo sabía, pero no es la respuesta correcta.';
            icon = 'error';
            sound = 'sad.mp3'; // Archivo de sonido para error
            break;
        case 'Nadie':
            message = 'Qué pena.';
            icon = 'warning';
            sound = 'sad.mp3'; // Archivo de sonido para advertencia
            break;
        case 'Yo':
            message = 'Qué egocéntrica, pero tampoco es la respuesta.';
            icon = 'warning';
            sound = 'sad.mp3'; // Archivo de sonido para advertencia
            break;
        case 'Todos':
            message = '¡Esa es la respuesta correcta!';
            icon = 'success';
            sound = 'aplausos.mp3'; // Archivo de sonido para éxito
            Swal.fire({
                title: 'Resultado',
                text: message,
                icon: icon,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#ff69b4'
            }).then(() => {
                // Reproduce el sonido
                const audio = new Audio(sound);
                audio.play();
                // Redirige a otro HTML después de cerrar la alerta
                // Con un pequeño retraso para que el sonido se escuche
                setTimeout(() => {
                    window.location.href = 'regalofinal.html'; // Cambia 'regalofinal.html' por la ruta de tu archivo
                }
                , 2000); // Espera 2 segundos antes de redirigir
            });
            return; // Salir de la función para evitar mostrar otra alerta
        case 'Al Antonio':
            message = 'Ya sabíamos que querías a los animales más que a los humanos, pero tampoco es la respuesta.';
            icon = 'info';
            sound = 'sad.mp3'; // Archivo de sonido para el conejo
            break;
        default:
            message = 'Opción no válida.';
            icon = 'question';
            sound = 'default.mp3'; // Archivo de sonido por defecto
    }

    // Reproduce el sonido
    const audio = new Audio(sound);
    audio.play();

    // Muestra la alerta
    Swal.fire({
        title: 'Resultado',
        text: message,
        icon: icon,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ff69b4'
    });
});