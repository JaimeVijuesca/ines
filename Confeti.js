document.getElementById('giftButton').addEventListener('click', () => {

   // Reproduce el sonido de aplausos
    const audio = new Audio('aplausos.mp3'); // Cambia la ruta si está en otra carpeta
    audio.play();

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

  
    // Lleva a la página de regalo de html
    // Cambia 'regalo.html' por la ruta de tu archivo
    // Cambiar pero con unos segundos de espera
    setTimeout(() => {
        // Redirige a otro HTML después de cerrar la alerta
        window.location.href = 'regalo.html'; // Cambia 'regalo.html' por la ruta de tu archivo
    }, 2000); // Espera 2 segundos antes de redirigir

   
  });


