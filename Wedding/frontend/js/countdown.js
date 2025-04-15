const timer = document.getElementById("timer");
// Reemplaza con tu fecha de boda
const weddingDate = new Date("2025-01-04T15:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    timer.innerHTML = "¡Ya es el gran día!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hrs}h ${min}m ${sec}s`;
}, 1000);
