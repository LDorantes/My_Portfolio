import { db } from './firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';

// Leer invitado por token
export async function getGuestByToken(token) {
  const guestsRef = collection(db, 'guests');
  const q = query(guestsRef, where('token', '==', token));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  }
  return null;
}

// Guardar confirmación
export async function saveRSVP(token, companions) {
  const guestsRef = collection(db, 'guests');
  const q = query(guestsRef, where('token', '==', token));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const docRef = snapshot.docs[0].ref;
    await updateDoc(docRef, {
      companions,
      confirmed: true
    });
  }
}
