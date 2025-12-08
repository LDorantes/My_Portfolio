"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { detectLocaleFromNavigator, messages, Locale } from "./lib/i18n";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("preferredLocale") as Locale | null;

    if (stored === "es" || stored === "en") {
      setLocale(stored);
    } else {
      const detected = detectLocaleFromNavigator();
      setLocale(detected);
      window.localStorage.setItem("preferredLocale", detected);
    }
  }, []);

  const handleToggleLocale = () => {
    const next = locale === "es" ? "en" : "es";
    setLocale(next);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("preferredLocale", next);
    }
  };

  const t = messages[locale].home;

  return (
    <section className="relative overflow-hidden">

      {/* Switch de idioma */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={handleToggleLocale}
          className="px-4 py-2 rounded-full bg-white/80 border border-brand-purple/40 text-xs md:text-sm font-medium text-brand-dark shadow-sm hover:bg-brand-purple/10 transition"
        >
          {locale === "es" ? "ES · EN" : "EN · ES"}
        </button>
      </div>

      {/* Fondo Futurista con mezcla de gradientes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-orange opacity-[0.35]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/20 top-[-150px] left-[-150px] blur-[2px]" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-white/10 bottom-[-200px] right-[-200px] blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),rgba(255,255,255,0))]" />
      </div>

      {/* HERO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-6 py-32 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
        {/* Columna izquierda */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark leading-tight drop-shadow-sm">
            {t.heroName} <br />
            <span className="text-brand-purple">{t.heroLastName}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mt-6 max-w-lg">
            {t.role}
          </p>

          <p className="text-gray-600 mt-4 max-w-lg">
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start">
            <a
              href="/about"
              className="px-8 py-3 rounded-full bg-brand-purple text-white font-semibold shadow-md hover:bg-brand-blue transition"
            >
              {t.aboutButton}
            </a>

            <a
              href="/contact"
              className="px-8 py-3 rounded-full border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition"
            >
              {t.contactButton}
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

      {/* CTA CV */}
      <section className="max-w-6xl mx-auto px-6 mt-10 mb-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-purple mb-4">
            {t.cvTitle}
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            {t.cvSubtitle}
          </p>

          <a
            href="/cv/CV-ELeonardoDoor.pdf"
            download
            className="px-10 py-4 rounded-full bg-brand-purple text-white font-semibold shadow-md hover:bg-brand-blue transition text-lg"
          >
            {t.cvButton}
          </a>
        </div>
      </section>

      {/* PROYECTOS RECIENTES */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-4xl font-bold text-brand-purple mb-10 text-center">
          {t.recentProjectsTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Proyecto 1 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-brand-purple/10 shadow-lg hover:shadow-2xl transition cursor-pointer">
            <img
              src="/projects/wed.webp"
              className="rounded-lg mb-4 h-40 w-full object-cover"
              alt={t.project1Title}
            />
            <h3 className="text-xl font-bold text-brand-dark">
              {t.project1Title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              {t.project1Desc}
            </p>
            <a
              href="/projects"
              className="text-brand-purple font-semibold mt-4 inline-block hover:text-brand-orange transition"
            >
              {t.viewMore}
            </a>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-brand-purple/10 shadow-lg hover:shadow-2xl transition cursor-pointer">
            <img
              src="/projects/actvesp.webp"
              className="rounded-lg mb-4 h-40 w-full object-cover"
              alt={t.project2Title}
            />
            <h3 className="text-xl font-bold text-brand-dark">
              {t.project2Title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              {t.project2Desc}
            </p>
            <a
              href="/projects"
              className="text-brand-purple font-semibold mt-4 inline-block hover:text-brand-orange transition"
            >
              {t.viewMore}
            </a>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-brand-purple/10 shadow-lg hover:shadow-2xl transition cursor-pointer">
            <img
              src="/projects/milpa.jpg"
              className="rounded-lg mb-4 h-40 w-full object-cover"
              alt={t.project3Title}
            />
            <h3 className="text-xl font-bold text-brand-dark">
              {t.project3Title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              {t.project3Desc}
            </p>
            <a
              href="/projects"
              className="text-brand-purple font-semibold mt-4 inline-block hover:text-brand-orange transition"
            >
              {t.viewMore}
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS PROFESIONALES */}
      <section className="max-w-6xl mx-auto px-6 mt-32 mb-32">
        <h2 className="text-4xl font-bold text-brand-purple mb-10 text-center">
          {t.skillsTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-14">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">
              {t.skillsFrontend}
            </h3>
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
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">
              {t.skillsBackend}
            </h3>
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
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">
              {t.skillsMobileOther}
            </h3>
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
