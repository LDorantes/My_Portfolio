import { db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function getGuestByToken(token) {
  const ref = doc(db, "guests", token);
  const snap = await getDoc(ref);
  if (snap.exists()) return snap.data();
  return null;
}

export async function saveRSVP(token, companions = []) {
  const ref = doc(db, "guests", token);
  await updateDoc(ref, {
    confirmed: true,
    companions
  });
}
