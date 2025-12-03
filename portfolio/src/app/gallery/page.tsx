"use client";

import Link from "next/link";

const events = [
  {
    slug: "graduacion-2025",
    title: "Graduación 2025",
    date: "Noviembre 2025",
    cover: "/gallery/graduacion-2025/cover.png",
    description: "Un día importante donde celebro el cierre de una etapa académica.",
  },
  {
    slug: "cumple-23",
    title: "Mi Cumpleaños 23",
    date: "Marzo 2025",
    cover: "/gallery/cumple-23/cover.jpg",
    description: "Celebración con amigos y familia — un recuerdo especial.",
  },
  {
    slug: "viaje-gdl",
    title: "Viaje a Guadalajara",
    date: "2024",
    cover: "/gallery/viaje-gdl/cover.jpg",
    description: "Un viaje lleno de experiencias, fotos y momentos increíbles.",
  },
];

export default function GalleryPage() {
  return (
    <section className="relative py-32 px-6 max-w-6xl mx-auto">

      {/* Fondo futurista */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-blue/5 to-brand-orange/10" />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-brand-purple text-center mb-16">
        Galería de Momentos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {events.map((event) => (
          <Link
            key={event.slug}
            href={`/gallery/${event.slug}`}
            className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-brand-purple/10 overflow-hidden hover:shadow-2xl transition block"
          >
            <img
              src={event.cover}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-brand-purple">{event.title}</h3>
              <p className="text-gray-600 text-sm">{event.date}</p>
              <p className="text-gray-700 mt-3 text-sm">{event.description}</p>

              <span className="mt-4 inline-block text-brand-purple font-semibold hover:text-brand-orange transition">
                Ver evento →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
