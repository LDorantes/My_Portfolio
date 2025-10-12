import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getGuestByToken, saveRSVP } from '../services/guestService';
import CalendarVisual from './CalendarVisual';
import { useConfirmed } from '../context/ConfirmedContext';

export default function RSVPSection() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [guestData, setGuestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [companions, setCompanions] = useState([]);
  const [message, setMessage] = useState('');
  const { confirmed, setConfirmed } = useConfirmed();

  useEffect(() => {
    async function fetchGuest() {
      const data = await getGuestByToken(token);
      if (data) {
        setGuestData(data);
        setCompanions(
          Array.from({ length: data.maxGuests || 0 }, (_, i) => data.companions?.[i] || "")
        );
        if (data.confirmed) setConfirmed(true);
      }
      setLoading(false);
    }

    if (token) fetchGuest();
    else setLoading(false);
  }, [token, setConfirmed]);

  function handleCompanionChange(index, value) {
    const updated = [...companions];
    updated[index] = value;
    setCompanions(updated);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const cleaned = companions.map((c) => c ?? '');

    try {
      await saveRSVP(token, cleaned);
      setMessage('Gracias por confirmar, ¡nos vemos en la boda!');
      setGuestData((prev) => ({
        ...prev,
        confirmed: true,
      }));
      setConfirmed(true);
    } catch (error) {
      console.error('Error al guardar RSVP:', error);
      setMessage('Hubo un error al confirmar. Intenta más tarde.');
    }
  }

  if (loading) return <p className="text-center py-10">Cargando...</p>;

  if (!guestData) {
    return (
      <p className="text-center py-10 text-red-600">
        Invitación no válida.
      </p>
    );
  }

  if (guestData.confirmed || confirmed) {
    return (
      <section className="py-16 px-6 bg-purple-50 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">
          Confirmación registrada
        </h2>
        <p className="text-lg text-green-600 mb-6">
          Ya has confirmado tu asistencia. ¡Te esperamos pronto!
        </p>

        {message && (
          <p className="text-green-600 font-medium mb-4">{message}</p>
        )}

        <div className="mt-8 space-y-8">
          <CalendarVisual />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-purple-50 text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-4">
        Confirmar asistencia
      </h2>

      {/* 🟣 Mensaje principal */}
      <p className="text-lg mb-3">
        Hola <strong>{guestData.name}</strong>
        {guestData.maxGuests > 0 && (
          <>
            , puedes asistir con hasta <strong>{guestData.maxGuests}</strong>{" "}
            acompañante{guestData.maxGuests > 1 ? "s" : ""}.
          </>
        )}
      </p>

      {/* 🟣 Mensaje personalizado del anfitrión */}
      {guestData.message && (
        <p className="text-sm italic text-gray-600 mb-6 max-w-md mx-auto">
          {guestData.message}
        </p>
      )}

      {/* Formulario solo si hay acompañantes */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        {guestData.maxGuests > 0 &&
          companions.map((name, index) => (
            <input
              key={index}
              type="text"
              value={name}
              placeholder={`Nombre del acompañante ${index + 1}`}
              onChange={(e) => handleCompanionChange(index, e.target.value)}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          ))}

        <button
          type="submit"
          className="bg-purple-700 text-white py-3 px-6 rounded-full hover:bg-purple-800 transition"
        >
          Confirmar asistencia
        </button>
      </form>

      {message && (
        <p className="mt-6 text-green-600 font-medium">{message}</p>
      )}
    </section>
  );

}
