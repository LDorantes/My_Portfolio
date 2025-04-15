const db = window.db;

async function loadGuests() {
  try {
    const querySnapshot = await getDocs(collection(db, 'invitados'));
    const guestList = document.getElementById('guest-list');
    guestList.innerHTML = '';
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

document.addEventListener('DOMContentLoaded', loadGuests);