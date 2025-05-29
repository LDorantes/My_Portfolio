import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getGuestByToken, saveRSVP } from '../services/guestService';


export default function RSVPSection() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [guestData, setGuestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [companions, setCompanions] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchGuest() {
      // Aquí iría tu fetch desde Firestore usando el token
      const fakeData = {
        name: 'Juan Pérez',
        maxGuests: 2,
        companions: ['', ''],
        confirmed: false,
      };
      setGuestData(fakeData);
      setCompanions(fakeData.companions || []);
      setLoading(false);
    }

    if (token) {
      fetchGuest();
    } else {
      setLoading(false);
    }
  }, [token]);

  function handleCompanionChange(index, value) {
    const updated = [...companions];
    updated[index] = value;
    setCompanions(updated);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aquí guardarías la respuesta en Firestore
    setMessage('Gracias por confirmar, ¡nos vemos en la boda!');
  }

  if (loading) return <p className="text-center py-10">Cargando...</p>;

  if (!guestData) return <p className="text-center py-10">Invitación no válida.</p>;

  return (
    <section className="py-16 px-6 bg-purple-50 text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-4">Confirmar asistencia</h2>
      <p className="text-lg mb-6">Hola <strong>{guestData.name}</strong>, puedes asistir con hasta <strong>{guestData.maxGuests}</strong> acompañante(s).</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        {companions.map((name, index) => (
          <input
            key={index}
            type="text"
            value={name}
            placeholder={`Nombre del acompañante ${index + 1}`}
            onChange={(e) => handleCompanionChange(index, e.target.value)}
            className="w-full p-3 rounded border border-gray-300"
          />
        ))}

        <button
          type="submit"
          className="bg-purple-700 text-white py-3 px-6 rounded-full hover:bg-purple-800 transition"
        >
          Confirmar asistencia
        </button>
      </form>

      {message && <p className="mt-6 text-green-600 font-medium">{message}</p>}
    </section>
  );
}
