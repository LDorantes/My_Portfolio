import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';

export default function GiftSection() {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    async function fetchGifts() {
      try {
        const querySnapshot = await getDocs(collection(db, 'registry_items'));
        const results = querySnapshot.docs.map(doc => doc.data());
        setGifts(results);
      } catch (error) {
        console.error('Error loading gifts:', error);
      }
    }

    fetchGifts();
  }, []);

  return (
    <section id="gifts" className="py-16 px-6 bg-purple-50 text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-8">Mesa de regalos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {gifts.map((gift, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition ${
              gift.purchased ? 'opacity-50' : ''
            }`}
          >
            <img
              src={gift.img}
              alt={gift.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{gift.title}</h3>
            <a
              href={gift.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
            >
              Ver regalo
            </a>
            {gift.purchased && (
              <p className="mt-3 text-sm text-red-500 font-medium">¡Ya fue elegido!</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}