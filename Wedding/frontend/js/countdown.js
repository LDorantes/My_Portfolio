function countdown() {
  const weddingDate = new Date('2025-06-15T00:00:00'); // Ajusta la fecha de tu boda aquí
  const now = new Date();
  const timeDifference = weddingDate - now;

  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const timerElement = document.getElementById('timer');

  if (daysLeft > 0) {
    timerElement.textContent = `${daysLeft} días`;
  } else if (daysLeft === 0) {
    timerElement.textContent = '¡Es hoy!';
  } else {
    timerElement.textContent = '¡Ya pasó!';
  }
}

document.addEventListener('DOMContentLoaded', countdown);