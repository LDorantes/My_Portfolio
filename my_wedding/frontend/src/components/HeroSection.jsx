import { useConfirmed } from '../context/ConfirmedContext';

export default function HeroSection() {
  const { confirmed, loading } = useConfirmed();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-purple-50 to-white text-center">
      <h1 className="text-5xl font-bold text-purple-800 mb-4">Andy & Leo</h1>
      <p className="text-lg text-gray-600 mb-8">27 de diciembre, 2025</p>

      {!loading && !confirmed && (
        <a
          href="#rsvp"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-800 transition"
        >
          Confirmar asistencia
        </a>
      )}
    </section>
  );
}
