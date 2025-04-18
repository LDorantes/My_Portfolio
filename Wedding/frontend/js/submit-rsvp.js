const db = window.db;

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