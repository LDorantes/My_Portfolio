"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "2002",
    title: "Nací en Querétaro",
    description:
      "El inicio del recorrido. Una historia que comienza con curiosidad y un deseo natural de entender cómo funciona el mundo.",
  },
  {
    year: "2018",
    title: "Mi interés real por la tecnología",
    description:
      "Entre videojuegos, computadoras y experimentos, descubrí que crear cosas con software se sentía natural para mí.",
  },
  {
    year: "2022",
    title: "Inicio de mi Ingeniería en Software",
    description:
      "Un capítulo clave: formalicé mi camino como desarrollador y me adentré en el diseño de sistemas, bases de datos y arquitectura.",
  },
  {
    year: "2024",
    title: "Primeros proyectos reales",
    description:
      "Desarrollo de sistemas, apps móviles, dashboards y aplicaciones reales que impactan personas e instituciones.",
  },
  {
    year: "2025",
    title: "Construyendo mi identidad como ingeniero",
    description:
      "Empiezo a consolidar mi visión como desarrollador completo, creador de proyectos con propósito y claridad.",
  },
];

export default function TimelinePage() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Fondo Futurista */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-blue/5 to-brand-orange/10" />

        {/* Círculos suaves */}
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full border border-brand-purple/20 blur-[1px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[650px] h-[650px] rounded-full border border-brand-blue/20 blur-[1px]" />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-brand-purple text-center mb-20">
        Mi Historia
      </h1>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Línea central */}
        <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-brand-purple via-brand-blue to-brand-orange transform -translate-x-1/2 opacity-60" />

        {/* Eventos */}
        <div className="space-y-24">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Punto */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-orange rounded-full border-4 border-white shadow-lg" />

                {/* Tarjeta */}
                <div
                  className={`w-[90%] md:w-[48%] backdrop-blur-lg bg-white/60 border border-brand-purple/10 shadow-lg rounded-xl p-6 ${
                    isLeft ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-brand-purple">
                    {event.year}
                  </h3>
                  <h4 className="text-xl font-semibold text-brand-dark mt-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-700 mt-3 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
