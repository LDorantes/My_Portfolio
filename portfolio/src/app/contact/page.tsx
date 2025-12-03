"use client";

export default function ContactPage() {
  return (
    <section className="relative py-32 px-6 max-w-6xl mx-auto">

      {/* Fondo suave futurista */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-blue/5 to-brand-orange/10" />
      </div>

      {/* Título */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-purple mb-4">
          Contacto
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Si quieres colaborar, platicar de un proyecto, o estás evaluando mi perfil
          para un rol como desarrollador, aquí puedes contactarme directamente.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Columna izquierda: info de contacto */}
        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-brand-purple/10 p-6">
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Información directa</h2>
            <p className="text-gray-700 mb-4">
              Prefiero mensajes claros y concretos. Si compartes contexto del rol o del proyecto,
              mejor todavía.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold text-brand-dark">Email:</span>{" "}
                <a
                  href="mailto:ledoor2@gmail.com.com"
                  className="text-brand-purple hover:text-brand-orange font-medium"
                >
                  ledoor2@gmail.com.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand-dark">Ubicación:</span>{" "}
                Querétaro, México (disponible remoto / híbrido)
              </p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-brand-purple/10 p-6">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">Redes profesionales</h2>
            <p className="text-gray-700 mb-4">
              Aquí puedes revisar más de mi trabajo, código y trayectoria.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/leonardo-dorantes-9a5b491a0"
                  target="_blank"
                  className="text-brand-purple hover:text-brand-orange font-medium"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/LDorantes"
                  target="_blank"
                  className="text-brand-purple hover:text-brand-orange font-medium"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="/cv/cv-leonardo.pdf"
                  target="_blank"
                  className="text-brand-purple hover:text-brand-orange font-medium"
                >
                  Ver CV en PDF
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-brand-purple/10 p-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Envíame un mensaje</h2>
          <p className="text-gray-700 text-sm mb-6">
            Llena este formulario y podré responderte por correo.
          </p>

          {/* Por ahora, el formulario no envía a un backend real.
              Puedes cambiar action a un endpoint o integrarlo con EmailJS después. */}
          <form
            className="space-y-5"
            action="mailto:ledoor2@gmail.com.com"
            method="POST"
            encType="text/plain"
          >
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="nombre@ejemplo.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">
                Asunto
              </label>
              <input
                type="text"
                name="asunto"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="Ej. Oportunidad laboral, colaboración, proyecto..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none"
                placeholder="Cuéntame en qué estás pensando."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-brand-purple text-white font-semibold hover:bg-brand-blue transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
