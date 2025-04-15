// Usa la instancia global de db definida en index.html
const db = window.db;

// Obtiene el ID de la URL
const invitadoID = window.location.pathname.replace("/", "").trim();
const nombreElement = document.getElementById("nombreInvitado");
const mensajeElement = document.getElementById("mensajeInvitado");
const qrContainer = document.getElementById("qrContainer");

// Función para cargar datos de un invitado específico y generar el QR
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

// Función para cargar la lista de invitados
async function loadGuests() {
    try {
        const querySnapshot = await getDocs(collection(db, 'invitados'));
        const guestList = document.getElementById('guest-list');
        guestList.innerHTML = ''; // Limpiar contenido previo
        querySnapshot.forEach((doc) => {
            const guest = doc.data();
            const div = document.createElement('div');
            div.className = 'bg-white p-4 rounded shadow';
            div.innerHTML = `<h2 class="text-xl font-bold">${guest.nombre}</h2><p>${guest.email || 'Sin email'}</p>`;
            guestList.appendChild(div);
        });
    } catch (error) {
        console.error("Error al cargar invitados:", error);
        document.getElementById('guest-list').innerHTML = '<p>Error al cargar la lista de invitados.</p>';
    }
}

// Función para enviar el RSVP
window.submitRSVP = async function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attending = document.getElementById('attending').value;

    if (!name || !email) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    try {
        await addDoc(collection(db, 'rsvps'), {
            name: name,
            email: email,
            attending: attending,
            timestamp: new Date()
        });
        alert('RSVP enviado correctamente');
        document.getElementById('rsvp-form').reset();
    } catch (error) {
        console.error('Error al enviar RSVP:', error);
        alert('Hubo un error al enviar tu RSVP. Intenta de nuevo.');
    }
};

// Ejecuta las funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarInvitado(invitadoID);
    loadGuests();
});