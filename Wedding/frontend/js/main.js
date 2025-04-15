import { db } from "./firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
import QRCode from "qrcode";

// Obtener ID desde la URL (ej. tuboda.com/leonardo)
const path = window.location.pathname.replace("/", "");
const qrContainer = document.getElementById("qrContainer");
const toggleBtn = document.getElementById("toggleLang");
let currentLang = "es";

async function cargarInvitado(id) {
    const docRef = doc(db, "invitados", id);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      const data = docSnap.data();
      const qrData = data.qrData;
      qrContainer.innerHTML = "";
      QRCode.toCanvas(qrData, { width: 200 }, (err, canvas) => {
        if (err) console.error(err);
        qrContainer.appendChild(canvas);
      });
    } else {
      qrContainer.innerHTML = `<p>Invitado no encontrado</p>`;
    }
  }
  
  if (path) {
    cargarInvitado(path);
  }

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = el.getAttribute("data-lang") === currentLang ? "" : "none";
  });
  toggleBtn.textContent = currentLang === "es" ? "EN" : "ES";
});
