"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Fondo suave futurista */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-blue/5 to-brand-orange/10"></div>
        <div className="absolute w-[700px] h-[700px] rounded-full border border-brand-purple/20 top-[-200px] left-[-200px] blur-[1px]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-brand-orange/10 bottom-[-200px] right-[-200px] blur-[2px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold text-brand-purple mb-10 text-center"
        >
          Sobre mí
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"
        >
          Soy Leonardo Dorantes, desarrollador de software y creador de sistemas.
          Mi objetivo es construir experiencias digitales funcionales, elegantes y con propósito.
        </motion.p>

        {/* Sección Historia */}
        <div className="mt-20 space-y-16">
          {/* ¿Quién soy? */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-brand-purple/10"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              ¿Quién soy?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Soy un ingeniero de software nacido en Querétaro.  
              Me apasionan los sistemas, el diseño de experiencias digitales
              y la idea de que la tecnología puede mejorar la vida de las personas
              si se construye con propósito y claridad.
            </p>
          </motion.div>

          {/* Mi camino */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-brand-blue/10"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Mi camino como desarrollador
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Empecé de forma autodidacta, explorando la programación, los videojuegos y la web.
              Más adelante estudié Ingeniería en Software, donde descubrí mi pasión por
              crear sistemas completos: frontend, backend, arquitectura, bases de datos
              y herramientas modernas que permiten que las ideas tomen vida.
            </p>
          </motion.div>

          {/* Mi visión */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-brand-orange/10"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Mi visión
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Aspiro a convertirme en un ingeniero completo: alguien capaz de entender
              sistemas complejos, diseñar soluciones escalables y construir herramientas que ayuden a otros.
              Este portafolio es parte de esa misión: una autobiografía digital que crece contigo.
            </p>
          </motion.div>

          {/* Intereses */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-brand-purple/10"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Intereses y motivación
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Me interesan el diseño de sistemas, la arquitectura de software, el impacto humano
              de la tecnología, la filosofía práctica y el aprendizaje continuo.
              Busco crear proyectos que conecten ingeniería, claridad y propósito.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
