const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-service-account-key.json'); // Crea una clave de servicio en Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const guests = require('./invitados.json');

guests.forEach((guest) => {
  db.collection('guests').doc(guest.id).set(guest)
    .then(() => console.log(`Invitado ${guest.name} agregado`))
    .catch((error) => console.error('Error al agregar invitado: ', error));
});