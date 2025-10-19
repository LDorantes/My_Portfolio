import { db } from './firebase';
import { collection, query, where, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';

// 🔹 Leer invitado por token
export async function getGuestByToken(token) {
  const guestsRef = collection(db, 'guests');
  const q = query(guestsRef, where('token', '==', token));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  }
  return null;
}

// 🔹 Guardar confirmación (sin borrar otros campos)
export async function saveRSVP(token, companions = [], declined = false) {
  const guestsRef = collection(db, 'guests');
  const q = query(guestsRef, where('token', '==', token));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const docRef = snapshot.docs[0].ref;

    await setDoc(
      docRef,
      {
        companions,
        confirmed: !declined,
        declined,
      },
      { merge: true }
    );
  }
}
