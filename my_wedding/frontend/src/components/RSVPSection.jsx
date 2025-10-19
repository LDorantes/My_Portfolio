import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getGuestByToken, saveRSVP } from '../services/guestService';
import CalendarVisual from './CalendarVisual';
import { useConfirmed } from '../context/ConfirmedContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function RSVPSection() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [guestData, setGuestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [companions, setCompanions] = useState([]);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [declined, setDeclined] = useState(false);
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
        if (data.declined) setDeclined(true);
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
        declined: false,
      }));
      setConfirmed(true);
    } catch (error) {
      console.error('Error al guardar RSVP:', error);
      setMessage('Hubo un error al confirmar. Intenta más tarde.');
    }
  }

  async function handleDecline() {
    try {
      await saveRSVP(token, [], true); // true = declined
      setShowModal(false);
      setDeclined(true);
      setMessage('Gracias por avisarnos, te esperamos para ver los recuerdos 💕');
    } catch (error) {
      console.error('Error al registrar declinación:', error);
    }
  }

  if (loading) return <p className="text-center py-10">Cargando...</p>;
  if (!guestData) return <p className="text-center py-10 text-red-600">Invitación no válida.</p>;

  // 🟣 Si ya confirmó asistencia
  if (guestData.confirmed || confirmed) {
    return (
      <section className="py-16 px-6 bg-purple-50 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Confirmación registrada</h2>
        <p className="text-lg text-green-600 mb-6">
          ¡Gracias por confirmar! Estamos felices de contar contigo 🥂
        </p>
        <CalendarVisual />
      </section>
    );
  }

  // 🟣 Si declinó
  if (declined || guestData.declined) {
    return (
      <section className="py-16 px-6 bg-purple-50 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Gracias por avisarnos 💌</h2>
        <p className="text-lg text-gray-700 max-w-md mx-auto">
          Lamentamos que no puedas acompañarnos, pero apreciamos mucho tu mensaje.
        </p>
        <p className="mt-4 text-sm italic text-gray-500">
          Mantente pendiente de esta invitación, aquí compartiremos recuerdos y fotos del gran día 💕
        </p>
      </section>
    );
  }

  // 🟣 Formulario principal
  return (
    <section className="py-16 px-6 bg-purple-50 text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-4">Confirmar asistencia</h2>
      <p className="text-lg mb-3">
        Hola <strong>{guestData.name}</strong>
        {guestData.maxGuests > 0 && (
          <>
            , puedes asistir con hasta <strong>{guestData.maxGuests}</strong>{" "}
            acompañante{guestData.maxGuests > 1 ? "s" : ""}.
          </>
        )}
      </p>

      {guestData.maxGuests === 0 && (
        <p className="text-sm italic text-gray-600 mb-6 max-w-md mx-auto">
          Tu invitación es individual 💌. Agradecemos profundamente que nos acompañes en este día tan especial.
        </p>
      )}

      {guestData.message && (
        <p className="text-sm italic text-gray-600 mb-6 max-w-md mx-auto">
          {guestData.message}
        </p>
      )}

      {/* Formulario de confirmación */}
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="submit"
            className="bg-purple-700 text-white py-3 px-6 rounded-full hover:bg-purple-800 transition"
          >
            Confirmar asistencia
          </button>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-gray-300 text-gray-700 py-3 px-6 rounded-full hover:bg-gray-400 transition"
          >
            No podré asistir
          </button>
        </div>
      </form>

      {message && <p className="mt-6 text-green-600 font-medium">{message}</p>}

      {/* 🟣 Modal de declinación */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-[90%] text-center"
            >
              <h3 className="text-2xl font-semibold text-purple-800 mb-3">¿No podrás acompañarnos?</h3>
              <p className="text-gray-600 mb-6">
                Es una pena 💔, pero te agradecemos mucho por hacérnoslo saber.
              </p>

              <button
                onClick={handleDecline}
                className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition"
              >
                Confirmar que no asistiré
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="block mx-auto mt-4 text-sm text-gray-500 underline hover:text-gray-700"
              >
                Cancelar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
