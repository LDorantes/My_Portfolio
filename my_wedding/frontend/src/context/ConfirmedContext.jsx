import { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getGuestByToken } from '../services/guestService';

const ConfirmedContext = createContext();

export function ConfirmedProvider({ children }) {
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    async function checkStatus() {
      if (!token) return setLoading(false);
      try {
        const guest = await getGuestByToken(token);
        setConfirmed(guest?.confirmed || false);
      } catch (error) {
        console.error('Error fetching guest status:', error);
      } finally {
        setLoading(false);
      }
    }
    checkStatus();
  }, [token]);

  return (
    <ConfirmedContext.Provider value={{ confirmed, setConfirmed, loading }}>
      {children}
    </ConfirmedContext.Provider>
  );
}

export function useConfirmed() {
  return useContext(ConfirmedContext);
}
