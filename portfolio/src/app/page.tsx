"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="relative overflow-hidden">

      {/* Fondo Futurista con mezcla de gradientes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-orange opacity-[0.35]" />

        {/* Líneas futuristas */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/20 top-[-150px] left-[-150px] blur-[2px]" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-white/10 bottom-[-200px] right-[-200px] blur-[1px]" />

        {/* Patrón sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),rgba(255,255,255,0))]" />
      </div>

      {/* HERO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-6 py-32 text-center md:text-left flex flex-col md:flex-row items-center gap-16">

        {/* Columna izquierda */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark leading-tight drop-shadow-sm">
            Leonardo <br />
            <span className="text-brand-purple">Dorantes</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mt-6 max-w-lg">
            Full Stack Developer · Software Engineer · Autobiografía Digital en Construcción
          </p>

          <p className="text-gray-600 mt-4 max-w-lg">
            Creo en sistemas elegantes, funcionales y significativos.  
            Esta página es mi historia, mi trabajo y mi visión — un registro vivo  
            de quién soy y en quién me estoy convirtiendo.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start">
            <a
              href="/about"
              className="px-8 py-3 rounded-full bg-brand-purple text-white font-semibold shadow-md hover:bg-brand-blue transition"
            >
              Saber más de mí
            </a>

            <a
              href="/contact"
              className="px-8 py-3 rounded-full border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Columna derecha (Foto) */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-purple to-brand-orange opacity-40 blur-2xl group-hover:opacity-60 transition" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/profile-placeholder.jpg"
                alt="Leonardo Dorantes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA ELEGANTE – DESCARGAR CV */}
      <section className="max-w-6xl mx-auto px-6 mt-10 mb-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-purple mb-4">
            Descarga mi CV
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Versión profesional en PDF — ideal para reclutadores y entrevistas.  
            Mantengo este documento actualizado con mis habilidades y proyectos más recientes.
          </p>

          <a
            href="/cv/cv-leonardo.pdf"
            download
            className="px-10 py-4 rounded-full bg-brand-purple text-white font-semibold shadow-md hover:bg-brand-blue transition text-lg"
          >
            Descargar CV en PDF
          </a>
        </div>
      </section>

      {/* PROYECTOS RECIENTES */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-4xl font-bold text-brand-purple mb-10 text-center">
          Proyectos Recientes
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Proyecto 1 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-brand-purple/10 shadow-lg hover:shadow-2xl transition cursor-pointer">
            <img
              src="/projects/wedding.jpg"
              className="rounded-lg mb-4 h-40 w-full object-cover"
              alt="Invitación digital"
            />
            <h3 className="text-xl font-bold text-brand-dark">Invitación de Boda Digital</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Sitio interactivo con RSVP, QR, animaciones y diseño elegante.
            </p>
            <a href="/projects" className="text-brand-purple font-semibold mt-4 inline-block hover:text-brand-orange transition">
              Ver más →
            </a>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-brand-purple/10 shadow-lg hover:shadow-2xl transition cursor-pointer">
            <img
              src="/projects/dashboard.jpg"
              className="rounded-lg mb-4 h-40 w-full object-cover"
              alt="Dashboard"
            />
            <h3 className="text-xl font-bold text-brand-dark">Dashboard Profesional</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Panel dinámico con gráficas, autenticación y manejo de datos.
            </p>
            <a href="/projects" className="text-brand-purple font-semibold mt-4 inline-block hover:text-brand-orange transition">
              Ver más →
            </a>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-brand-purple/10 shadow-lg hover:shadow-2xl transition cursor-pointer">
            <img
              src="/projects/milpa.jpg"
              className="rounded-lg mb-4 h-40 w-full object-cover"
              alt="Milpa App"
            />
            <h3 className="text-xl font-bold text-brand-dark">Milpa App</h3>
            <p className="text-gray-600 mt-2 text-sm">
              App móvil con Flutter, MVVM y Firebase.
            </p>
            <a href="/projects" className="text-brand-purple font-semibold mt-4 inline-block hover:text-brand-orange transition">
              Ver más →
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS PROFESIONALES */}
      <section className="max-w-6xl mx-auto px-6 mt-32 mb-32">
        <h2 className="text-4xl font-bold text-brand-purple mb-10 text-center">
          Habilidades Técnicas
        </h2>

        <div className="grid md:grid-cols-3 gap-14">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">React</span>
              <span className="skill-badge">Next.js</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">TailwindCSS</span>
              <span className="skill-badge">Framer Motion</span>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express</span>
              <span className="skill-badge">Firebase</span>
              <span className="skill-badge">SQL / MySQL</span>
              <span className="skill-badge">Supabase</span>
            </div>
          </div>

          {/* Mobile & Otros */}
          <div>
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">Mobile & Otros</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Flutter</span>
              <span className="skill-badge">Dart</span>
              <span className="skill-badge">Git / GitHub</span>
              <span className="skill-badge">Figma</span>
              <span className="skill-badge">SCRUM</span>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
