// Importa los módulos necesarios de Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import QRCode from 'qrcode';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "andyleos-wedding.firebaseapp.com",
    projectId: "andyleos-wedding",
    storageBucket: "andyleos-wedding.appspot.com",
    messagingSenderId: "TU_MESSAGING_ID",
    appId: "TU_APP_ID"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtiene el ID de la URL
const invitadoID = window.location.pathname.replace("/", "").trim();
const nombreElement = document.getElementById("nombreInvitado");
const mensajeElement = document.getElementById("mensajeInvitado");
const qrContainer = document.getElementById("qrContainer");

async function cargarInvitado(id) {
    if (!id) {
        nombreElement.textContent = "Invitado desconocido";
        mensajeElement.textContent = "No se encontró tu información.";
        return;
    }

    try {
        const docRef = doc(db, "invitados", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();

            nombreElement.textContent = data.nombre || id;
            mensajeElement.textContent = data.mensaje || "¡Nos encantaría verte en nuestra boda!";

            const contenidoQR = data.qrData || `https://tuboda.com/${id}`;
            QRCode.toCanvas(contenidoQR, { width: 200 }, (err, canvas) => {
                if (err) {
                    qrContainer.innerHTML = "<p>Error al generar el QR</p>";
                } else {
                    qrContainer.innerHTML = "";
                    qrContainer.appendChild(canvas);
                }
            });
        } else {
            nombreElement.textContent = "Invitado no encontrado";
            mensajeElement.textContent = "Verifica tu URL o contáctanos.";
        }
    } catch (error) {
        nombreElement.textContent = "Error al conectar";
        mensajeElement.textContent = "Hubo un problema al cargar los datos.";
        console.error("Error:", error);
    }
}
export { db };

cargarInvitado(invitadoID);