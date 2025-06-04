import { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function useConfirmedStatus() {
  const [confirmed, setConfirmed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token');

    async function fetchStatus() {
      if (!token) {
        setConfirmed(false);
        setLoading(false);
        return;
      }

      try {
        const q = query(collection(db, 'guests'), where('token', '==', token));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const doc = snapshot.docs[0].data();
          setConfirmed(!!doc.confirmed);
        } else {
          setConfirmed(false);
        }
      } catch (error) {
        console.error('Error checking confirmation status:', error);
        setConfirmed(false);
      } finally {
        setLoading(false);
      }
    }

    fetchStatus();
  }, []);

  return { confirmed, loading };
}