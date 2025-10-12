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
export async function saveRSVP(token, companions) {
  const guestsRef = collection(db, 'guests');
  const q = query(guestsRef, where('token', '==', token));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const docRef = snapshot.docs[0].ref;

    // Limpieza y normalización del array
    const cleanedCompanions = companions.map((c) => c?.trim() || "");

    await setDoc(
      docRef,
      {
        companions: cleanedCompanions,
        confirmed: true,
      },
      { merge: true } // mantiene los demás campos intactos
    );
  }
}