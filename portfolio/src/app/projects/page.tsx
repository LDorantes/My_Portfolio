"use client";

import { motion } from "framer-motion";

// Lista de proyectos (puedes ir agregando más)
const projects = [
  {
    title: "Invitación de Boda Digital",
    description:
      "Aplicación web interactiva con animaciones, RSVP con código QR, galería y experiencia elegante para invitados.",
    tech: ["React", "TailwindCSS", "Firebase", "Framer Motion"],
    link: "https://wedding-andyleo.info/?token=",
    image: "/projects/wed.webp",
  },
  {
    title: "Dashboard Académico",
    description:
      "Dashboard dinámico y responsivo para consulta de datos escolares, panel de administración y reportes.",
    tech: ["Next.js", "TypeScript", "Supabase", "Chart.js"],
    link: "https://adminactivities.jfk-technology.net/login",
    image: "/projects/actvesp.webp",
  },
  {
    title: "Milpa App (Colaboración)",
    description:
      "Aplicación móvil de nutrición con Flutter y arquitectura MVVM, integrando Firebase, autenticación y planes personalizados.",
    tech: ["Flutter", "Dart", "Firebase", "MVVM"],
    link: "https://github.com",
    image: "/projects/milpa.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Fondo suave futurista */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-blue/5 to-brand-orange/10" />
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full border border-brand-purple/20 blur-[1px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[650px] h-[650px] rounded-full border border-brand-blue/20 blur-[1px]" />
      </div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-brand-purple text-center mb-20"
      >
        Proyectos
      </motion.h1>

      {/* Grid de tarjetas */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/60 backdrop-blur-md border border-brand-purple/10 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer group"
          >
            {/* Imagen */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-brand-purple">
                {p.title}
              </h3>

              <p className="text-gray-700 mt-3 leading-relaxed">
                {p.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Botón */}
              <a
                href={p.link}
                target="_blank"
                className="inline-block mt-6 px-5 py-2 rounded-full bg-brand-purple text-white font-medium hover:bg-brand-blue transition"
              >
                Ver proyecto →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
