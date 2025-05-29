// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-white text-center p-6">
      <h1 className="text-5xl font-bold text-purple-800 mb-4">Andy & Leo</h1>
      <p className="text-xl text-gray-700 mb-8">20 de diciembre, 2025</p>
      <a
        href="#rsvp"
        className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition"
      >
        Confirmar asistencia
      </a>
    </section>
  );
}
