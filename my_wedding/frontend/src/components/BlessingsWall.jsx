import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function BlessingsWall() {
  const [message, setMessage] = useState('');
  const [blessings, setBlessings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function fetchBlessings() {
      const q = query(collection(db, 'blessings'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map(doc => doc.data());
      setBlessings(results);
      setLoading(false);
    }

    fetchBlessings();
  }, [submitted]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;

    await addDoc(collection(db, 'blessings'), {
      message,
      createdAt: serverTimestamp()
    });

    setMessage('');
    setSubmitted(prev => !prev);
  }

  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // sin espera entre transiciones
    cssEase: 'linear',
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <section id="blessings-wall" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50 text-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-6">Deja una bendición</h2>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Escribe un deseo, una bendición o un mensaje especial para los novios. Todos los invitados podrán verlo.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tu mensaje anónimo con amor..."
          rows="4"
          className="w-full p-4 border border-purple-300 rounded-lg shadow-sm"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition"
        >
          Enviar bendición
        </button>
      </form>

      <div className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl text-purple-700 font-semibold mb-6">Bendiciones compartidas 💌</h3>
        {loading ? (
          <p className="text-gray-500">Cargando mensajes...</p>
        ) : blessings.length === 0 ? (
          <p className="text-gray-500">Aún no hay mensajes. ¡Sé el primero en dejar uno! 🌸</p>
        ) : (
          <Slider {...settings}>
            {blessings.map((b, i) => (
              <div key={i} className="px-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 max-w-xl mx-auto">
                  <p className="text-gray-700 italic text-lg leading-relaxed">"{b.message}"</p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}