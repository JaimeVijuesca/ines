
// Cuenta regresiva hasta que tu hermana cumpla 30 años
function updateCountdown() {
  const now = new Date();
  
  // Tu hermana cumple 26 años este 14 de mayo
  // Por lo tanto, cumplirá 30 años el 14 de mayo de 2029
  const targetDate = new Date(2029, 4, 14, 23, 59, 59, 999); // 14 de mayo de 2029 a las 23:59:59

  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('countdown').textContent = "¡Ya ha cumplido 30 años! 🎉";
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('countdown').textContent = 
    `Faltan ${days} días, ${hours}h ${minutes}m ${seconds}s para que cumplas 30 años 🎈`;
}

const intervalId = setInterval(updateCountdown, 1000);

updateCountdown();
